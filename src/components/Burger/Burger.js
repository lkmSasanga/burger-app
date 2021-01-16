import React from "react";
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    console.log('from burger comp ' , props)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // console.log('..........', Array(props.ingredients[igKey])) ;
                // console.log('igKey ', igKey+i ) ;
                return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    // console.log('ingredients', props.ingredients) ;
    // console.log('ingredients', Object.keys(props.ingredients) );



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default withRouter(burger);