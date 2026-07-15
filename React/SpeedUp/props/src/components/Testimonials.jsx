
import Testimonial from "./Testimonial";


const allTestimonials = [
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Mehek Gupta",
    tbrief: "Absolutely loved the gel manicure! The attention to detail at Studio Tint is unmatched. My nails look stunning and the color selection is huge.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Sharad Mane",
    tbrief: "Came in for a men's manicure and grooming session. Very professional staff and a super clean environment. Highly recommend their services!",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Deven",
    tbrief: "Hands down the best pedicure in town. The massage was incredibly relaxing, and the staff really took their time. It's a gorgeous salon.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Abhi Patil",
    tbrief: "Great experience getting acrylic extensions here. The nail tech was a true artist and gave me exactly the shape and design I wanted.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Priya Sharma",
    tbrief: "Studio Tint is my new go-to spot! Their nail extension services are top-tier. They lasted for weeks without a single chip.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Rohan Joshi",
    tbrief: "I accompanied my wife and ended up getting a classic pedicure. It was surprisingly relaxing and the hygiene standards are top-notch.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Ananya Iyer",
    tbrief: "The nail art extensions I got for the festive season were incredible. I received so many compliments! Studio Tint never disappoints.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Sneha Reddy",
    tbrief: "Their spa pedicure is pure bliss. It felt like a luxury retreat. Perfect way to unwind after a stressful work week.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Vikram Malhotra",
    tbrief: "Clean lines, professional service, and a great vibe. The manicures here are precise and very well executed. Five stars!",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Riya Kapoor",
    tbrief: "Obsessed with my new gel extensions! The staff at Studio Tint are incredibly skilled and gentle. Definitely coming back.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Tanvi Shah",
    tbrief: "I love the vibe of Studio Tint. The French manicure I got looks so elegant. They use high-quality products that don't damage your natural nails.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Kabir Mehta",
    tbrief: "Excellent service! Visited for a pedicure to soothe my tired feet after running a marathon. The massage therapy they include is brilliant.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Nisha Verma",
    tbrief: "If you want perfect nail extensions, this is the place to be. The overlays are flawless, thin, and look completely natural.",
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogynmqMdpVUyqwkm-TWGlXjUOuqbvieE-OvwAbkl-xQ&s=10",
    heading: "Divya Deshmukh",
    tbrief: "The combo manicure and pedicure package is totally worth it. The staff is warm and polite, making the whole experience delightful.",
  },
  {
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
    heading: "Arjun Rao",
    tbrief: "Very neat and hygienic salon setup. Got a standard manicure and the detailing on the cuticles was exceptionally well done.",
  }
];

const Testimonials = () => {
  return (
    <section>
        {allTestimonials.map((testimonial, index,) => (
          <Testimonial
            key={index}
            avatar={testimonial.avatar}
            heading={testimonial.heading}
            tbrief={testimonial.tbrief}
            />
        ))}
    </section>
  )
}

export default Testimonials