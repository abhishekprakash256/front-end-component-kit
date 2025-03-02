import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css'; // check later
import CustomBody from './components/CustomBody';
import HeadingBar from './components/HeadingBar';
import More from './components/More';
import MarkDown from './components/MarkDown';
import Footer from './components/Footer';
import Para from './components/Para';
import SocialMediaLinks from './components/SocialMediaLinks';
import ArticleImage from './components/ArticleImage';
import SpaceBlock from './components/SpaceBlock';
import CardLists from './components/CardLists';
import PaginationExp from './components/PaignatationExp';
import CardsPaignation from './components/CardsPaignation';
import AboutPic from './components/AboutPic';
import ButtonBar from './components/ButtonBar';
import NotFound from './components/NotFound';
// import the data 
const title = "Tech";
const more_link = "www.google.com";
const mark_down_data = " ## Heading\n The classic example that we can understand dynamic programming with is the Fibonacci series, which can be solved both recursively and using dynamic programming.\n ### Recursive Approach \n ```python \ndef fibbo(nums):\n      if nums <= 1:\n        return 1\n      return fibbo(n-1) + fibbo(n-2)\n ```\n\n### Dynamic Programming with Memoization\n ```python\ndef fibonacci(n, memo={}):\n       if n in memo:\n         return memo[n]\n       if n <= 1:\n         return n\n       else:\n          memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n       return memo[n]\n ```\n\n### Dynamic Programming with Tabulation\n ```python\ndef fibonacci(n):\n        if n <= 1:\n            return n\n   \n        fib_table = [0] * (n + 1)\n        fib_table[1] = 1\n\n        for i in range(2, n + 1):\n           fib_table[i] = fib_table[i - 1] + fib_table[i - 2]\n\n        return fib_table[n]\n";
const description = "I am Abhishek Prakash (Abhi), a professional with over two years of industry experience and a master's degree in computer science from <a href='https://www.fsu.edu' target='_blank' style='color: #CEB888; text-decoration: none;' onmouseover='this.style.color = \"#782F40\"' onmouseout='this.style.color=\"#CEB888\"'>Florida State University</a>. My expertise lies in various programming languages, with a strong emphasis on Python. I specialize in machine learning, automation, software development, and the design and deployment of cloud infrastructure as code. I am proficient in popular machine learning and deep learning frameworks such as PyTorch, TensorFlow, scikit-learn, and pandas. My comprehensive background in computer science, including an in-depth understanding of data structures and algorithms, underpins my professional journey. Throughout my career, I have been actively involved in a wide range of software projects, from developing small-scale tools to orchestrating large-scale production systems. My experience extends to website development, including front-end, back-end, and database integration, ensuring the robustness and efficiency of solutions through unit testing, data visualization, and data engineering.In addition to my core skills, I have specialized in Machine Learning Operations (MLOps), managing CI/CD pipelines and Docker images to ensure the seamless integration and deployment of machine learning models. I am adept at using automation tools like Ansible and Terraform, streamlining and automating MLOps processes to enhance the overall efficiency and reliability of machine learning workflows.";
const article_image = "chat-app-icon.png";
const profile_pic = "profile-pic.jpg";
const skills_data = "#### **Programming Languages**: Python, JavaScript, TypeScript, Shell Scripting  \n#### **Web Development**: React, Next.js, Node.js, Flask, Bootstrap, REST APIs, NGINX  \n#### **Cloud & DevOps:** AWS, Docker, GitHub Actions, GitLab CI/CD, Ansible  \n#### **Databases:** PostgreSQL, MongoDB, Redis, SQL, SQLite  \n#### **Machine Learning & AI:** PyTorch, TensorFlow, Pandas, Scikit-learn, Deep Learning, Reinforcement Learning";
const experience_data1 = "#### **Software Developer | Pro Playgrounds**  \n - **Led development of modular, responsive UI components with HTML, CSS, and JavaScript, increasing monthly traffic by 37%.**  \n - **Engineered a dynamic product filtering system, improving catalog navigation speed by 40%**.  \n - **Automated end-to-end testing and deployment pipelines using GitLab CI/CD, Selenium, Ansible, and Python, optimizing backend processes and checkout experience.**";
const experience_data2 = "#### **Full Stack Developer | Self Employed**  \n - **Portfolio Migration:** Upgrading to React, Next.js, and NestJS (TS) for scalability & modular architecture. Integrating PostgreSQL & MongoDB for structured & unstructured data.  \n - **Refactored monolithic architecture into a hybrid microservices model, improving scalability and maintainability.**  \n - **Chat App:** Built a real-time messaging app with React, Flask, MongoDB, Redis, and WebSockets.  \n   - Implemented JWT authentication, reducing unauthorized access by 30%.  \n   - Designed a responsive and intuitive UI with Bootstrap, ensuring optimal performance and a seamless experience.  \n - **Tiny URL Generator:** Developed a URL-shortening service with React, Flask & Redis, reducing query time by 25%.  \n   - Incorporated collision avoidance and exposed a REST API for URL creation and redirection.  \n - **Portfolio Website:** Developed both front-end and back-end and deployed a personal portfolio site on AWS EC2, automated with CI/CD pipelines, NGINX, and Ansible, achieving 99.9% uptime.";
const experience_data3 = "#### **Software Developer and DevOps | Cognitive Geo Interpretation Inc**  \n - **Designed & implemented a GitLab CI/CD pipeline, automating AWS EC2 provisioning for a microservices architecture.**  \n - **Integrated Ansible for automated configuration management, ensuring consistency and reducing developer setup time by 55%.**  \n - **Increased test coverage from 63% to 78% by using Pytest & unit testing.** ";
const experience_data4 = "#### **Research Assistant | Florida State University**  \n - **Developed Federated Learning (Fed-Avg) models on MNIST dataset, achieving 94% accuracy using PyTorch.**  \n - **Built a Double Deep Q-Learning model for edge computing, optimizing task off-loading by 30%, using PyTorch.**  \n - **Developed a backend with Python Flask for efficient CRUD operations on an SQLite database, populating it with 2,000 entries and optimizing query performance by 20%.**";
const resume_link = "/resume.pdf";
const socialLinks = [
    "https://github.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile/",
    "https://twitter.com/yourprofile",
    "https://leetcode.com/yourprofile",
    "https://gitlab.com/yourprofile",
    "https://www.kaggle.com/yourprofile",
    "https://medium.com/@yourprofile",
];
const cardData = [
    {
        card_title: "Card Title 1",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
        img_src: "cards.jpg", /* the image file is in the public folder */
        card_url: "https://example.com/card1",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
];
const cardDataTwo = [{
        card_title: "Card Title 1",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
        img_src: "cards.jpg", /* the image file is in the public folder */
        card_url: "https://example.com/card1",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    }];
const Paignation_data = [
    {
        card_title: "Card Title 1",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
        img_src: "cards.jpg", /* the image file is in the public folder */
        card_url: "https://example.com/card1",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 1",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
        img_src: "cards.jpg", /* the image file is in the public folder */
        card_url: "https://example.com/card1",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
    {
        card_title: "Card Title 3",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png", /* the image file is in the public folder */
        card_url: "https://example.com/card3",
    },
    {
        card_title: "Card Title 4",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "image_1.png",
        card_url: "https://example.com/card4",
    },
    {
        card_title: "Card Title 2",
        card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
        img_src: "federated-learning-flow.png", /* the image file is in the public folder */
        card_url: "https://example.com/card2",
    },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsxs(CustomBody, { children: [_jsx(HeadingBar, { title: "Abhi's Microcosm" }), _jsx(AboutPic, { image_link: profile_pic }), _jsx(SocialMediaLinks, { github_link: socialLinks[0], linkedin_link: socialLinks[1], twitter_link: "", leetcode_link: socialLinks[3], gitlab_link: socialLinks[4], kaggle_link: socialLinks[5], medium_link: "" }), _jsx(NotFound, {}), _jsx(Para, { description: description }), _jsx(HeadingBar, { title: "Skills" }), _jsx(MarkDown, { mark_down_data: skills_data }), _jsx(HeadingBar, { title: "Experience" }), _jsx(MarkDown, { mark_down_data: experience_data1 }), _jsx(MarkDown, { mark_down_data: experience_data2 }), _jsx(MarkDown, { mark_down_data: experience_data3 }), _jsx(MarkDown, { mark_down_data: experience_data4 }), _jsx(HeadingBar, { title: "Tech" }), _jsx(CardLists, { cardData: cardDataTwo }), _jsx(More, { more_link: more_link }), _jsx(HeadingBar, { title: "Project" }), _jsx(CardsPaignation, { cardData: Paignation_data }), _jsx(HeadingBar, { title: "Chat App" }), _jsx(ArticleImage, { image_link: article_image }), _jsx(HeadingBar, { title: "MarkDown Block" }), _jsx(MarkDown, { mark_down_data: mark_down_data }), _jsx(More, { more_link: more_link }), _jsx(Para, { description: description }), _jsx(CardLists, { cardData: cardData }), _jsx(SocialMediaLinks, { github_link: socialLinks[0], linkedin_link: socialLinks[1], twitter_link: "", leetcode_link: socialLinks[3], gitlab_link: socialLinks[4], kaggle_link: socialLinks[5], medium_link: "" }), _jsx(PaginationExp, {}), _jsx(SpaceBlock, {}), "  ", _jsx(ButtonBar, { button_text: "Download Resume", link: resume_link })] }), _jsx(Footer, {})] }));
}
export default App;
