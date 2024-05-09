import { NavLink } from 'react-router-dom';
import { CustomButton } from '../common/custom_button/CustomButton';
import classes from './PageNotFound.module.css';

export const PageNotFound = () => (
    <div className={classes.mainContainer}>
        <span className={classes.textContainer}>lost in space you have reached the edge of the universe</span>
        <CustomButton className={classes.button} onClick={() => { }}>
            <NavLink className={classes.navLink} to={'/login'}>HOME</NavLink>
        </CustomButton>
    </div>
);