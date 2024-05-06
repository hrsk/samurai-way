import { NavLink } from 'react-router-dom';
import classes from './PageNotFound.module.css';
import pageNotFound from './../../assets/images/404/technology_404.png';
import { Button } from '../common/button/Button';


<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" /></svg>

export const PageNotFound = () => (
    <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
            <span>404: </span>
            <span>PAGE NOT FOUND</span>
            <p>lost in space you have reached the edge of the universe</p>

            <img className={classes.image} src={pageNotFound} alt='page not found' />

        </div>
        <Button className={classes.button} onClick={() => { }}>
            <NavLink className={classes.navLink} to={'/login'}>
                <svg fill='#fff' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" /></svg>
            </NavLink>
        </Button>
    </div>
);