import PropTypes from "prop-types";
import rightArrow from "../../assets/icons/right-arrow.svg";

SingleCategory.propTypes = {
	category: PropTypes.shape({
		categoryImage: PropTypes.string.isRequired,
		categoryName: PropTypes.string.isRequired,
		subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};


export default function SingleCategory({ category }) {
	const { categoryImage, categoryName, subcategories } = category;
	return (
		<div className="text-sm">
			<div className="flex space-x-1 mb-2">
				<img className="w-4" src={categoryImage} alt="category-image" />
				<h3 className="font-semibold text-base">{categoryName}</h3>
			</div>
			<ul className="space-y-1">
				{subcategories?.map((sub, index) => (
					<li key={index + 2}>
						<a className="hover:text-blue-600" href="#">
							{sub}
						</a>
					</li>
				))}
			</ul>
			<li className="list-none mt-1">
				<a className="hover:text-primary-500 flex space-x-2 group" href="#">
					<span>All in {categoryName}</span>
					<img
						className="w-3 group-hover:ml-3 duration-200"
						src={rightArrow}
						alt="rigt-arrow-icon"
					/>
				</a>
			</li>
		</div>
	);
}

