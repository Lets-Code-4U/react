import { BadgeCheck, MapPin, HandCoins, Users, Bookmark, Star, BriefcaseBusiness } from "lucide-react"

const Cards = (props) => {


    return (
        <>
            <div className="main-container" >
                <div className="sub-container">
                    <div className="profile-img">
                        <img src={props.profileImg} alt="" />
                    </div>
                    <div className="intro">
                        <h1>{props.name}, {props.age} <span> <BadgeCheck color="#0e6fd8" size={16} /> </span></h1>
                        <h3>{props.profession}</h3>
                        <p><MapPin color="#0e6fd8" size={12} strokeWidth={1.5} />{props.location}</p>
                    </div>
                    <div className="details">
                        <div className="sub-details"><Star size={15} strokeWidth={3} />{props.rating} <span>({props.reviews} reviews)</span></div>
                        <div className="sub-details"><BriefcaseBusiness size={15} strokeWidth={3} />{props.experience}+ Years <span>Experience</span></div>
                        <div className="sub-details"><HandCoins size={15} strokeWidth={3} />{props.worth} <span>Net Worth</span></div>
                        <div className="sub-details"><Users size={15} strokeWidth={3} />{props.clients}+ <span>Clients</span></div>
                    </div>
                    <div className="followers">
                        <p>{props.followers} <em>Followers</em></p>
                        <p>{props.following} <em>Following</em></p>
                        <p><Bookmark size={20} strokeWidth={2} /></p>
                    </div>
                    <div className="follow-btn">
                        <button> Follow </button>
                    </div>
                    <div className="scroller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
