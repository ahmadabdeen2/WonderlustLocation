import React, { useState, useEffect } from "react";
import {
  LocationContainer,
  LocationWrapper,
  CategoryContainer,
  Location,
  LocationImage,
  LocationName,
  CategoryChip,
  LocationsHeaderContainer,
  Heading,
  NoneFound,
  ShowMoreButton
} from "./styles";

import { urlFor, client } from "../../../client";
import { useLocation } from "react-router-dom";
import Loader from "../../Loader";
import { CursorContext } from "../../CustomCursor/CursorManager";


const FeaturedLocationsSection = () => {
  const location = useLocation();
  const { projectEnter, projectLeave } = React.useContext(CursorContext);
  const [locationsJSON, setLocationsJSON] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCity,setSelectedCity] = useState('All')
  const [reachedEnd, setReachedEnd] = useState(false);
  const [cities, setCities] = useState(['All']);
  const [noLocations, setNoLocations] = useState(false);
  const [title, setTitle] = useState("");
  const [ActiveCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);
  const pathname = location.pathname.split("/")[2];
  console.log(pathname)
 const getLocationsAndPopulateCategories = async () => {
   let query;
   let data;
  if (page === 0){
   
    const query = `*[_type == "locationsclient" && slug.current match '${pathname}']{clientname, location[]->{..., city->{name}, locationcategory->{categoryname}}}[0...10]`
    setTitle("Our Locations");
    data = await client.fetch(query);
    setAllLocations(data[0].location);
    setLocationsJSON(data[0].location) 
    setPage(page+10);
  } else {
    const query = `*[_type == "locationsclient" && slug.current match '${pathname}']{clientname, location[]->{..., city->{name}, locationcategory->{categoryname}}}[${page}...${page+10}]`
    data = await client.fetch(query);
    setAllLocations(prevState => prevState.concat(data));
    setLocationsJSON(prevState => prevState.concat(data));
    setPage(page+2);
  }
    const categoriesPre = data[0].location.map((location) => location.locationcategory.categoryname)
    const prevCategories = categories;
    const newCategories = [...new Set(categoriesPre)];
    const allCategories = prevCategories.concat(newCategories);
    const uniqueCategories = [...new Set(allCategories)];
    if (!uniqueCategories.includes('All')){
    uniqueCategories.unshift('All');
    }
    setCategories(uniqueCategories);
    const citiesPre = data[0].location.map((location) => location.city.name)
    const prevCities = cities;
    const newCities = [...new Set(citiesPre)];
    const allCities = prevCities.concat(newCities);
    const uniqueCities = [...new Set(allCities)];

    if (!uniqueCities.includes('All')){
      uniqueCities.unshift('All');
    }
    setCities(uniqueCities);
    };
    useEffect(() => {
    getLocationsAndPopulateCategories();
    }, []);




const handleActiveCityAndCategory = (city, category) => {
  if (city === 'All' && category === 'All') {
    setLocationsJSON(allLocations);
    setSelectedCity(city);
    setActiveCategory(category);
    return;
  }
  if (city === 'All' && category !== 'All') {
    const filteredLocations = allLocations.filter((location) => location.locationcategory.categoryname === category);
    setLocationsJSON(filteredLocations);
    setSelectedCity(city);
    setActiveCategory(category);
    return;
  }
  if (city !== 'All' && category === 'All') {
    const filteredLocations = allLocations.filter((location) => location.city.name === city);
    setLocationsJSON(filteredLocations);
    setSelectedCity(city);
    setActiveCategory(category);
    return;
  }
  if (city !== 'All' && category !== 'All') {
    const filteredLocations = allLocations.filter((location) => location.city.name === city && location.locationcategory.categoryname === category);
    setLocationsJSON(filteredLocations);
    setSelectedCity(city);
    setActiveCategory(category);
    return;
  }
}

  return (
    <>
   
        <LocationContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.2, delay: 0 }}
          viewport={{ once: true }}
        >
          <LocationsHeaderContainer>
            <Heading>{title}</Heading>
            <CategoryContainer>
              {cities.map((city) => {
                return (
                  <CategoryChip
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration:0.5, delay: 0 }}
                    viewport={{ once: true }}
                    onClick={() => handleActiveCityAndCategory(city, ActiveCategory)}
                    className={selectedCity === city ? "active" : ""}
                  >
                    {city === 'alula' ? 'Al Ula' : city[0].toUpperCase() + city.slice(1)}
                  </CategoryChip>
                );
              })}
            </CategoryContainer>
            <CategoryContainer>
              {categories.map((category) => {
                return (
                  <CategoryChip
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1}}
                  transition={{ duration:0.5, delay: 0 }}
                    viewport={{ once: true }}
                    onClick={() => handleActiveCityAndCategory(selectedCity, category)}
                    className={ActiveCategory === category ? "active" : ""}
                  >
                    {category}
                  </CategoryChip>
                );
              })}
            </CategoryContainer>
          </LocationsHeaderContainer>
          {locationsJSON.length === 0 ? (
            noLocations ? (     
        <Loader /> ) : ( <NoneFound>No Locations Found</NoneFound> ) 
      ) : (
          <LocationWrapper>
            {locationsJSON.map((locationobject) => {
              return (
                <Location
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  onMouseEnter={projectEnter}
                  onMouseLeave={projectLeave}
                  onClick={projectLeave}
                  to={"/location/" + locationobject._id}
                  key={locationobject._id}
                >
                  {locationobject.thumbnail && (
                    <LocationImage
                      src={urlFor(locationobject.thumbnail).url()}
                      alt={locationobject.name}
                    />
                  )}
                  <LocationName>{locationobject.locationname}</LocationName>
                </Location>
              );
            })}
          </LocationWrapper>
      )}
      {!reachedEnd && (
      <ShowMoreButton onClick={getLocationsAndPopulateCategories}>
        Show More
      </ShowMoreButton>
      )}
        </LocationContainer>
    </>
  );
};

export default FeaturedLocationsSection;
