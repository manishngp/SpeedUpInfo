
import Card from './components/Card'


function App() {

const contacts = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "Active",
    phone: "+91 9876543210",
    email: "aarav.sharma@co.com",
    position: "Frontend Developer",
    salary: 55000,
    department: "IT",
    city: "Pune",
    joiningDate: "2023-04-12"
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "Inactive",
    phone: "+91 9988776655",
    email: "priya.verma@co.com",
    position: "UI/UX Designer",
    salary: 48000,
    department: "Design",
    city: "Mumbai",
    joiningDate: "2022-11-03"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "Active",
    phone: "+91 9123456789",
    email: "rohan.mehta@co.com",
    position: "Backend Developer",
    salary: 62000,
    department: "Engineering",
    city: "Bangalore",
    joiningDate: "2021-08-15"
  },
  {
    id: 4,
    name: "Sneha Patil",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "Pending",
    phone: "+91 9090909090",
    email: "sneha.patil@co.com",
    position: "HR Manager",
    salary: 45000,
    department: "HR",
    city: "Nagpur",
    joiningDate: "2020-06-25"
  },
  {
    id: 5,
    name: "Kunal Joshi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "Active",
    phone: "+91 9345678123",
    email: "kunal.joshi@co.com",
    position: "DevOps Engineer",
    salary: 70000,
    department: "Cloud",
    city: "Hyderabad",
    joiningDate: "2024-01-10"
  },
  {
    id: 6,
    name: "Ananya Kulkarni",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    status: "Inactive",
    phone: "+91 9871234567",
    email: "ananya.k@co.com",
    position: "Content Writer",
    salary: 35000,
    department: "Marketing",
    city: "Delhi",
    joiningDate: "2021-03-19"
  },
  {
    id: 7,
    name: "Rahul Deshmukh",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    status: "Active",
    phone: "+91 9812345678",
    email: "rahul.d@co.com",
    position: "Project Manager",
    salary: 85000,
    department: "Management",
    city: "Pune",
    joiningDate: "2019-09-30"
  },
  {
    id: 8,
    name: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "Pending",
    phone: "+91 9765432109",
    email: "neha.kapoor@co.com",
    position: "QA Tester",
    salary: 42000,
    department: "Testing",
    city: "Chennai",
    joiningDate: "2023-07-21"
  },
  {
    id: 9,
    name: "Aditya Singh",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    status: "Active",
    phone: "+91 9900112233",
    email: "aditya.singh@co.com",
    position: "Data Analyst",
    salary: 60000,
    department: "Analytics",
    city: "Noida",
    joiningDate: "2022-02-11"
  },
  {
    id: 10,
    name: "Meera Nair",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    status: "Inactive",
    phone: "+91 9001122334",
    email: "meera.nair@co.com",
    position: "Marketing Lead",
    salary: 75000,
    department: "Marketing",
    city: "Kochi",
    joiningDate: "2020-10-05"
  },
  {
    id: 11,
    name: "Vikram Rao",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    status: "Active",
    phone: "+91 9887766554",
    email: "vikram.rao@co.com",
    position: "Mobile App Developer",
    salary: 67000,
    department: "Mobile",
    city: "Pune",
    joiningDate: "2024-03-01"
  },
  {
    id: 12,
    name: "Isha Gupta",
    image: "https://co.me/api/portraits/women/12.jpg",
    status: "Pending",
    phone: "+91 9554433221",
    email: "isha.g@example.com",
    position: "Business Analyst",
    salary: 58000,
    department: "Operations",
    city: "Indore",
    joiningDate: "2021-12-14"
  },
  {
    id: 13,
    name: "Manav Choudhary",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    status: "Active",
    phone: "+91 9332211445",
    email: "manav.c@co.com",
    position: "Cyber Security Expert",
    salary: 92000,
    department: "Security",
    city: "Jaipur",
    joiningDate: "2018-05-20"
  },
  {
    id: 14,
    name: "Pooja Yadav",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    status: "Inactive",
    phone: "+91 9445566778",
    email: "pooja.y@co.com",
    position: "Support Engineer",
    salary: 39000,
    department: "Support",
    city: "Lucknow",
    joiningDate: "2022-06-09"
  },
  {
    id: 15,
    name: "Siddharth Jain",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    status: "Active",
    phone: "+91 9778899001",
    email: "sid.jain@co.com",
    position: "AI Engineer",
    salary: 120000,
    department: "AI/ML",
    city: "Bangalore",
    joiningDate: "2025-01-18"
  },
  {
    id: 16,
    name: "Ritika Sen",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    status: "Pending",
    phone: "+91 9011223344",
    email: "ritika.sen@co.com",
    position: "SEO Specialist",
    salary: 41000,
    department: "Digital Marketing",
    city: "Kolkata",
    joiningDate: "2023-05-27"
  },
  {
    id: 17,
    name: "Harsh Vardhan",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    status: "Active",
    phone: "+91 9223344556",
    email: "harsh.v@co.com",
    position: "System Administrator",
    salary: 53000,
    department: "Infrastructure",
    city: "Pune",
    joiningDate: "2020-01-07"
  },
  {
    id: 18,
    name: "Kriti Malhotra",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    status: "Inactive",
    phone: "+91 9667788990",
    email: "kriti.m@co.com",
    position: "Finance Executive",
    salary: 47000,
    department: "Finance",
    city: "Ahmedabad",
    joiningDate: "2021-04-22"
  },
  {
    id: 19,
    name: "Yash Thakur",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    status: "Active",
    phone: "+91 9112233445",
    email: "yash.t@co.com",
    position: "Full Stack Developer",
    salary: 78000,
    department: "Development",
    city: "Surat",
    joiningDate: "2024-02-13"
  },
  {
    id: 20,
    name: "Simran Kaur",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    status: "Pending",
    phone: "+91 9881122334",
    email: "simran.kaur@co.com",
    position: "Product Manager",
    salary: 95000,
    department: "Product",
    city: "Chandigarh",
    joiningDate: "2019-11-29"
  }
];


  return (
     <div className="parent">
    {contacts.map(function(user, idx){
    
      return <Card key={idx} {...user}/>
    })
    }
    </div>
  )
}

export default App