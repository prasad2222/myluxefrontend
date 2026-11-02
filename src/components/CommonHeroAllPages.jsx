import React from "react";
import { useState,useEffect } from "react";
import BodyCSS from "./BodyComponent.module.css";
import { Card } from "./Card";
import HeroCSS from "./Hero.module.css";
import { Tabs } from "./Tabs";
import { ItemsList } from "./WIList";
import { MensItemsList } from "./MensList";
import { WomensDummyData } from "../Utils/WomensDummyData";
import { MensDummyData } from "../Utils/MensDummyData";

export const CommonHeroAllPages = ({ pagePath, headerOne, Headertwo, pageKey }) => {

    
    const [tabValue, setTabValue] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(pageKey === "women") {
            setTabValue(ItemsList[0].value); // Set default tab value for women
        } else if(pageKey === "men") {
            setTabValue(MensItemsList[0].value); // Set default tab value for men
        } else { 
            setTabValue("");
        }
    }, [pageKey]);


    // ✅ API CALL
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if(pageKey === "women") {
                    const data = WomensDummyData[tabValue];
                    setProducts(data?.products || []);
                }else if(pageKey === "men") {
                    const data = MensDummyData[tabValue];
                    setProducts(data?.products || []);
                } else {
                    setProducts([]);
                }
                
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, [tabValue, pageKey]); // 👈 important

    const handleChange = (event, newValue) => {
        console.log("Selected Tab:", newValue);
        setTabValue(newValue);
    };
    
    return (
        <div>
            <div className={BodyCSS.favorites_hero_section}>
                <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#9ca3af' }}>{pagePath}</p>
                <p className={HeroCSS.capsule} style={{ margin: '0 0 20px 0' }}>
                    ✦ Spring / Summer 2026 Collection
                </p>
                <div style={{ marginBottom: '32px' }}>
                    <h1 style={{ margin: '0 0 8px 0', fontSize: '40px', color: 'white' }}> <span style={{color:'white'}}>{headerOne}</span> <span style={{ color: '#c9a84c' }}>Fashion</span></h1>
                    <p style={{ margin: '0', fontSize: '16px', color: '#9ca3af', lineHeight: '1.6' }} dangerouslySetInnerHTML={{__html: Headertwo}}></p>
                </div>

                <div style={{ marginTop: '24px' }}>
                    {pageKey === "women" ? (
                        <Tabs Tabvalues={ItemsList} onChange={handleChange} value={tabValue}/>
                    ) : pageKey === "men" ? (
                       <Tabs Tabvalues={MensItemsList} onChange={handleChange} value={tabValue}/>
                    ) : null}
                </div>

            </div>

            {products.length === 0 ? (
            <p>No favorite items</p>
            ) : (
            <div className={BodyCSS.body_container}>
                {products.map((item) => (
                <Card pageKey={pageKey} key={item.id} {...item} />
                ))}
            </div>
            )}
        </div>
    );
}


