import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	pillarDiv: {
        fontSize: '12px',
        boxShadow: '0 -2px 2px rgba(0,0,0,0.2)',
        display: 'flex',
        color: 'red',
        width: '14em',
        height: '20em'
    },
    title: {
        fontSize: '20px',
        color: 'black'
    }
});


function Pillar({ id, title, date, category, description, verses }) {
    const classes = useStyles();

    return (
        <div className={classes.pillarDiv}>
            <div className={classes.title}>{title}</div>
    
      
      </div>
    );

}

export default Pillar;


/*
        {date}
            {category}
            {description}
            <ul>
                {
                verses.map((verse, i) => {
                    return <li key={i}>{verse}</li>
                })
                }
            </ul>
*/