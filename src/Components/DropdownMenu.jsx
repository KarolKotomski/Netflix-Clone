import React from "react";
import pencil from "../icons/pencil.png";
import caret from "../icons/caret.png";

const DropdownMenu = () => {
	return (
		<div className='dropdown_menu'>
			<div className='arrow'>
				<img src={caret} alt='caret icon'></img>
			</div>
			<div className='dropdown_menu_wrapper'>
				<div className='item'>
					<div className='item_icon'>
						<img src={pencil} alt='pencil icon' />
					</div>
					<div className='item_text'>
						<p>Manage Profiles</p>
					</div>
				</div>
				<div className='item'>
					<div className='item_icon'>
						<img src={pencil} alt='pencil icon' />
					</div>
					<div className='item_text'>
						<p>Transfer Profile</p>
					</div>
				</div>
				<div className='item'>
					<div className='item_icon'>
						<img src={pencil} alt='pencil icon' />
					</div>
					<div className='item_text'>
						<p>Account</p>
					</div>
				</div>
				<div className='item'>
					<div className='item_icon'>
						<img src={pencil} alt='pencil icon' />
					</div>
					<div className='item_text'>
						<p>Help Center</p>
					</div>
				</div>
			</div>
			<div className='sign_out'>
				<p>Sign out of Netflix</p>
			</div>
		</div>
	);
};

export default DropdownMenu;
