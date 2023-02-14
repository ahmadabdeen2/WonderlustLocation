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
  NoneFound
} from "./styles";

import { motion } from "framer-motion";
import { urlFor, client } from "../../../client";
import { useLocation } from "react-router-dom";
import Loader from "../../Loader";
import { CursorContext } from "../../CustomCursor/CursorManager";


const LocationsSection = (props) => {
  const location = useLocation();
  const { projectEnter, projectLeave } = React.useContext(CursorContext);
  const [locationsJSON, setLocationsJSON] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCity,setSelectedCity] = useState(props.city || 'All')
  const [cities, setCities] = useState(['All']);
  const [noLocations, setNoLocations] = useState(false);
  const [title, setTitle] = useState("");
  const [ActiveCategory, setActiveCategory] = useState("All");
  const pathname = location.pathname.split("/")[2];

 const getLocationsAndPopulateCategories = async () => {
  let query;
  console.log("props is", props)
  // if (pathname) {
  //   query = `*[_type == "location" && city.name == riyadh]{_id,locationname, slug, thumbnail, locationcategory->{categoryname}, city->{name}}`;
  //   setTitle(pathname[0].toUpperCase() + pathname.slice(1) + " Locations");
  // } else {
    query = `*[_type == "location"]{_id,locationname, slug, thumbnail, city->{name},locationcategory->{categoryname}}`;
    setTitle("Our Locations");
  // }
    const data = await client.fetch(query);
    console.log(data)
    setAllLocations(data);
    setLocationsJSON(data);
    const categoriesPre = data.map((location) => location.locationcategory.categoryname)
    const uniqueCategories = [...new Set(categoriesPre)];
    uniqueCategories.unshift('All');
    setCategories(uniqueCategories);

    const citiesPre = data.map((location) => location.city.name)
    const uniqueCities = [...new Set(citiesPre)];
    uniqueCities.unshift('All');
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
                    {city[0].toUpperCase() + city.slice(1)}
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
        </LocationContainer>
    </>
  );
};

export default LocationsSection;
