import Banner from "../components/Banner/Banner";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import VerifiedUser from "../components/VerifiedUser/VerifiedUser";


export default function HomePage() {
	return (
		<>
			<Banner />
			<PopularCategories />
			<VerifiedUser />
		</>
	);
}
