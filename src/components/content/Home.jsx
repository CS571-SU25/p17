import { Link } from "react-router";

export default function Home() {
    return <div>
        <h1>Welcome to Your Health and Wellness Management Journey!</h1>
        <p>This is where you can get basic information about health and wellness in the following area:</p>
        <p>
            <Link to="/nutrition"><strong>Nutrition</strong></Link>
            <Link to="/exercise"><strong>Exercise</strong></Link>
            <Link to="/sleep"><strong>Sleep</strong></Link>
        </p>
    </div>
};