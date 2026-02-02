import Cards from "./components/cards"

const App = () => {
  const profileData = [
    {
      "profileImage": "https://randomuser.me/api/portraits/men/11.jpg",
      "name": "Amit Sharma",
      "age": 34,
      "profession": "Business Consultant",
      "servingLocation": "Delhi, India",
      "rating": 4.6,
      "numberReviews": 520,
      "yearsOfExperience": 8,
      "netWorth": "$5M",
      "clientsAttended": 320,
      "followers": "12.4K",
      "following": 540
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/women/21.jpg",
      "name": "Priya Verma",
      "age": 29,
      "profession": "Senior UI/UX Designer",
      "servingLocation": "Bangalore, India",
      "rating": 4.4,
      "numberReviews": 410,
      "yearsOfExperience": 6,
      "netWorth": "$2M",
      "clientsAttended": 210,
      "followers": "9.8K",
      "following": 620
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/men/32.jpg",
      "name": "Rahul Mehta",
      "age": 41,
      "profession": "Chartered Accountant",
      "servingLocation": "Mumbai, India",
      "rating": 4.8,
      "numberReviews": 645,
      "yearsOfExperience": 15,
      "netWorth": "$12M",
      "clientsAttended": 540,
      "followers": "18.4k",
      "following": 430
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/men/45.jpg",
      "name": "Vikram Singh",
      "age": 37,
      "profession": "Senior Software Developer",
      "servingLocation": "Pune, India",
      "rating": 4.5,
      "numberReviews": 390,
      "yearsOfExperience": 10,
      "netWorth": "$6M",
      "clientsAttended": 280,
      "followers": "17K",
      "following": 510
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/women/48.jpg",
      "name": "Neha Kapoor",
      "age": 33,
      "profession": "Digital Marketing Strategist",
      "servingLocation": "Gurgaon, India",
      "rating": 4.3,
      "numberReviews": 275,
      "yearsOfExperience": 7,
      "netWorth": "$3.5M",
      "clientsAttended": 190,
      "followers": "8.6K",
      "following": 690
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/men/56.jpg",
      "name": "Arjun Malhotra",
      "age": 46,
      "profession": "Management Consultant",
      "servingLocation": "Delhi, India",
      "rating": 4.7,
      "numberReviews": 710,
      "yearsOfExperience": 18,
      "netWorth": "$36M",
      "clientsAttended": 620,
      "followers": "22.5K",
      "following": 380
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/women/59.jpg",
      "name": "Sneha Iyer",
      "age": 28,
      "profession": "Data Analyst",
      "servingLocation": "Chennai, India",
      "rating": 4.2,
      "numberReviews": "1.5K",
      "yearsOfExperience": 4,
      "netWorth": "$1.2M",
      "clientsAttended": 120,
      "followers": 6400,
      "following": 720
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/men/63.jpg",
      "name": "Kunal Bansal",
      "age": 35,
      "profession": "Startup Mentor",
      "servingLocation": "Noida, India",
      "rating": 4.6,
      "numberReviews": 460,
      "yearsOfExperience": 9,
      "netWorth": "$8M",
      "clientsAttended": 340,
      "followers": "2.4K",
      "following": 410
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/women/67.jpg",
      "name": "Anjali Deshpande",
      "age": 39,
      "profession": "HR Consultant",
      "servingLocation": "Hyderabad, India",
      "rating": 4.5,
      "numberReviews": 355,
      "yearsOfExperience": 12,
      "netWorth": "$4M",
      "clientsAttended": 260,
      "followers": "15.4K",
      "following": 560
    },
    {
      "profileImage": "https://randomuser.me/api/portraits/men/72.jpg",
      "name": "Rohit Chawla",
      "age": 31,
      "profession": "Product Manager",
      "servingLocation": "Bangalore, India",
      "rating": 4.4,
      "numberReviews": 240,
      "yearsOfExperience": 5,
      "netWorth": "$2.8M",
      "clientsAttended": 170,
      "followers": "10.4k",
      "following": 610
    }
  ]
  return (
    <div className="parent">
      {profileData.map(function (elem, idx) {
        return <div key={idx}>

          <Cards profileImg={elem.profileImage} name={elem.name} age={elem.age} profession={elem.profession} location={elem.location} rating={elem.rating} reviews={elem.numberReviews} experience={elem.yearsOfExperience}
            worth={elem.netWorth} clients={elem.clientsAttended} followers={elem.followers} following={elem.following} />
        </div>
      })}
    </div>
  )
}

export default App

