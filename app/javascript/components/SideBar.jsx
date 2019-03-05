import React  from 'react'


const SideBar = (props) =>{



    return(
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active main-color "
               onMouseOver=' animations(".list-group-item","mouseover", "rubberBand", )'>
                <i className={props.menu}>{props.children}</i> {props.menuName}
            </a>

            <a href="#" className="list-group-item list-group-item-action "><i
                className={props.itemOne}>{props.children}</i> {props.itemOneName}
                <span className="badge">
            </span>
            </a>

            <a href="#" className="list-group-item list-group-item-action "><i
                className={props.itemTwo}>{props.children}</i> {props.itemTwoName}
                <span className="badge">
                 </span>
            </a>

            <a href="#" className="list-group-item list-group-item-action "><i
                className={props.itemThree}>{props.children}</i> {props.itemThreeName}
                <span className="badge">
            </span>
            </a>


        </div>

    )

};

SideBar.defaultProps = {
    itemTwo: 'fas fa-cog',
    itemTwoName: 'Health',
    itemThree: 'fas fa-cog',
    itemThreeName: 'Pension'

};


export default SideBar