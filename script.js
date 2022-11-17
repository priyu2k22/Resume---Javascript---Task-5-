const body = document.querySelector("body");
body.style.fontFamily="'Roboto', sans-serif";

// Container
const div_Container = document.createElement("div");
div_Container.classList.add("container");
div_Container.style.width="80%";
div_Container.style.margin ="50px auto";
div_Container.style.position = "relative";

// Resume Header Container
const div_resume_header  = document.createElement("div");
div_resume_header.classList.add("resume-header");

// Employee Image
const div_employee_photo = document.createElement("div");
div_employee_photo.setAttribute("id","photo");
div_employee_photo.style.backgroundColor="#E14D2A";
div_employee_photo.style.width="100%";
div_employee_photo.style.textAlign="center";
div_employee_photo.style.marginBottom="20px";

const img_employee_photo = document.createElement("img");
img_employee_photo.setAttribute("src","images/Employee.png");
img_employee_photo.style.height="200px";
img_employee_photo.style.width="200px";

// Employee Name
const div_employee_name = document.createElement("div");
div_employee_name.setAttribute("id","name");
div_employee_name.style.backgroundColor = "#E14D2A";
div_employee_name.style.width = "100%";
div_employee_name.style.textAlign = "center";
div_employee_name.style.height = "40px";

const para_employee_name = document.createElement("p");
para_employee_name.innerText = "BRAIN DUDEY"; 
para_employee_name.style.fontSize = "50px";
para_employee_name.style.position="absolute";
para_employee_name.style.backgroundColor="white";
para_employee_name.style.display ="inline";
para_employee_name.style.borderRadius="10px";
para_employee_name.style.padding = "10px 30px";
para_employee_name.style.top = "120px";
para_employee_name.style.right = "320px";

// Employee Address
const div_address = document.createElement("div");
div_address.setAttribute("id","address");
div_address.style.borderBottom="1px solid gray";
div_address.style.width = "100%";
div_address.style.textAlign = "center";
div_address.style.marginBottom="20px";
div_address.style.letterSpacing ="1px";
div_address.style.fontSize = "15px";

const para_address = document.createElement("p");
para_address.innerText = "N. Damen Avenue, Chicagoo 99999 | 999-999-999 | hello@kickresume.com | www.kickresume.com";

// Appending Employee Photo, Name and Adddress into Resume Header Container
body.append(div_Container);
div_Container.append(div_resume_header);
div_employee_photo.append(img_employee_photo);
div_resume_header.append(div_employee_photo);
div_employee_name.append(para_employee_name);
div_resume_header.append(div_employee_name);
div_address.append(para_address);
div_resume_header.append(div_address);


// Resume Body Container
const div_resume_body = document.createElement("div");
div_resume_body.setAttribute("class","resume-body");
div_resume_body.style.display="flex";
div_resume_body.style.alignItems = "center"; 

// Resume Body - Left
const div_resume_body_left = document.createElement("div");
div_resume_body_left.setAttribute("class","resume-body-left");
div_resume_body_left.style.width="50%";
div_resume_body_left.style.textAlign="justify";
div_resume_body_left.style.padding ="20px";
div_resume_body_left.style.borderRight = "1px solid grey";

// Resume Left - Section 1 - Profile
const div_profile = document.createElement("div");
div_profile.setAttribute("class","profile");

// Profile Header
const div_profile_header = document.createElement("div");
div_profile_header.setAttribute("class","profile-header");
div_profile_header.style.display="flex";
div_profile_header.style.alignItems="center";
div_profile_header.style.padding = "4px";
div_profile_header.style.height = "25px";

// Profile Icon
const profile_icon = document.createElement("i");
profile_icon.classList.add("fa-solid","fa-user");
profile_icon.style.fontSize="30px";
profile_icon.style.marginRight = "10px";
profile_icon.style.color="#E14D2A";

// Profile Heading
const profile_name = document.createElement("h2");
profile_name.innerText = "Profile";

// Appending Profile Icon and Profile Heading in Profile Header
div_Container.append(div_resume_body);
div_resume_body.append(div_resume_body_left);
div_resume_body_left.append(div_profile);
div_profile.append(div_profile_header);
div_profile_header.append(profile_icon);
div_profile_header.append(profile_name);

// Profile Body
const div_profile_body = document.createElement("div");
div_profile_body.setAttribute("class","profile-body");
div_profile_body.style.padding="10px";

// Profile Career Objective
const para_profile = document.createElement("p");
para_profile.innerText =`Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer.  I am ambitios, adventurous, assiduous, animated, and as literation advocate.`;
para_profile.style.fontSize="15px";

// Appending Career Objective in profile body
div_profile.append(div_profile_body);
div_profile_body.append(para_profile);


// Resume Left - Section 2 - Skill
const div_skill = document.createElement("div");

// Skill Header
const div_skill_header = document.createElement("div");
div_skill_header.style.display = "flex";
div_skill_header.style.alignItems="center";
div_skill_header.style.padding = "4px";
div_skill_header.style.height="25px";

// Skill Icon
const skill_icon = document.createElement("i");
skill_icon.classList.add("fa-solid","fa-brain");
skill_icon.style.fontSize = "30px";
skill_icon.style.marginRight = "10px";
skill_icon.style.color="#E14D2A";

// Skill Heading
const skill_heading = document.createElement("h2");
skill_heading.innerText = "Skill";

// Appending Skill Icon and Skill Heading in Skill Header
div_resume_body_left.append(div_skill);
div_skill.append(div_skill_header);
div_skill_header.append(skill_icon);
div_skill_header.append(skill_heading);

// Skill Body
const div_skill_body = document.createElement("div");
div_skill_body.style.padding="10px";

// Skill Types Container
const div_skill_types_one = document.createElement("div");


// Skill Type One
 const div_skill_type_one = document.createElement("div");
 div_skill_type_one.style.display="flex";
 div_skill_type_one.style.justifyContent="space-around";
 

// Skill Type One : Heading -> Technical Skills
 const para_skill_type_one_heading = document.createElement("p");
 para_skill_type_one_heading.innerText = "Technical Skills";
 para_skill_type_one_heading.style.fontWeight="bold";
 para_skill_type_one_heading.style.fontSize="15px";

 // Technical Skill 1 = Javascript
 const div_tech_skill_one = document.createElement("div");
 div_tech_skill_one.style.height="20px";
 div_tech_skill_one.style.display="flex";
 div_tech_skill_one.style.justifyContent="space-between";
 div_tech_skill_one.style.alignItems="center";
 
 const para_tech_skill_one_name = document.createElement("p");
 para_tech_skill_one_name.innerText = "JavaScript";
 para_tech_skill_one_name.style.fontSize="15px";
 const div_tech_skill_one_range_container = document.createElement("div");
 
 const input_tech_skill_one = document.createElement("input");
 input_tech_skill_one.setAttribute("type","range");
 input_tech_skill_one.style.width="250px";
 input_tech_skill_one.style.height="5px";
 input_tech_skill_one.style.background="#d3d3d3";
 input_tech_skill_one.style.outline="none";
 input_tech_skill_one.style.transition = "opacity .2s";
 
 // Technical Skill 2 = CSS
 const div_tech_skill_two = document.createElement("div");
 div_tech_skill_two.style.height="20px";
 div_tech_skill_two.style.display="flex";
 div_tech_skill_two.style.justifyContent="space-between";
 div_tech_skill_two.style.alignItems="center";

 const para_tech_skill_two_name = document.createElement("p");
 para_tech_skill_two_name.innerText = "CSS";
 para_tech_skill_two_name.style.fontSize="15px";
 const div_tech_skill_two_range_container = document.createElement("div");
 
 const input_tech_skill_two = document.createElement("input");
 input_tech_skill_two.setAttribute("type","range");
 input_tech_skill_two.style.width="250px";
 input_tech_skill_two.style.height="5px";
 input_tech_skill_two.style.background="#d3d3d3";
 input_tech_skill_two.style.outline="none";
 input_tech_skill_two.style.transition = "opacity .2s";

 // Technical Skill 3 - HTML
 const div_tech_skill_three = document.createElement("div");
 div_tech_skill_three.style.height="20px";
 div_tech_skill_three.style.display="flex";
 div_tech_skill_three.style.justifyContent="space-between";
 div_tech_skill_three.style.alignItems="center";

 const para_tech_skill_three_name = document.createElement("p");
 para_tech_skill_three_name.innerText = "HTML";
 para_tech_skill_three_name.style.fontSize="15px";
 const div_tech_skill_three_range_container = document.createElement("div");
 
 const input_tech_skill_three = document.createElement("input");
 input_tech_skill_three.setAttribute("type","range");
 input_tech_skill_three.style.width="250px";
 input_tech_skill_three.style.height="5px";
 input_tech_skill_three.style.background="#d3d3d3";
 input_tech_skill_three.style.outline="none";
 input_tech_skill_three.style.transition = "opacity .2s";

 // Technical Skill 4 => React
 const div_tech_skill_fourth = document.createElement("div");
 div_tech_skill_fourth.style.height="20px";
 div_tech_skill_fourth.style.display="flex";
 div_tech_skill_fourth.style.justifyContent="space-between";
 div_tech_skill_fourth.style.alignItems="center";

 const para_tech_skill_fourth_name = document.createElement("p");
 para_tech_skill_fourth_name.innerText = "React";
 para_tech_skill_fourth_name.style.fontSize="15px";
 const div_tech_skill_fourth_range_container = document.createElement("div");
 
 const input_tech_skill_fourth = document.createElement("input");
 input_tech_skill_fourth.setAttribute("type","range");
 input_tech_skill_fourth.style.width="250px";
 input_tech_skill_fourth.style.height="5px";
 input_tech_skill_fourth.style.background="#d3d3d3";
 input_tech_skill_fourth.style.outline="none";
 input_tech_skill_fourth.style.transition = "opacity .2s";

 // Technical Skill 5 => Redux
 const div_tech_skill_fifth = document.createElement("div");
 div_tech_skill_fifth.style.height="20px";
 div_tech_skill_fifth.style.display="flex";
 div_tech_skill_fifth.style.justifyContent="space-between";
 div_tech_skill_fifth.style.alignItems="center";

 const para_tech_skill_fifth_name = document.createElement("p");
 para_tech_skill_fifth_name.innerText = "Redux";
 para_tech_skill_fifth_name.style.fontSize="15px";

 const div_tech_skill_fifth_range_container = document.createElement("div");
 const input_tech_skill_fifth = document.createElement("input");
 input_tech_skill_fifth.setAttribute("type","range");
 input_tech_skill_fifth.style.width="250px";
 input_tech_skill_fifth.style.height="5px";
 input_tech_skill_fifth.style.background="#d3d3d3";
 input_tech_skill_fifth.style.outline="none";
 input_tech_skill_fifth.style.transition = "opacity .2s";
 
 // Technical Skill 6 = Mongo
 const div_tech_skill_sixth = document.createElement("div");
 div_tech_skill_sixth.style.height="20px";
 div_tech_skill_sixth.style.display="flex";
 div_tech_skill_sixth.style.justifyContent="space-between";
 div_tech_skill_sixth.style.alignItems="center";

 const para_tech_skill_sixth_name = document.createElement("p");
 para_tech_skill_sixth_name.innerText = "Mongo";
 para_tech_skill_sixth_name.style.fontSize="15px";
 
 const div_tech_skill_sixth_range_container = document.createElement("div");
 const input_tech_skill_sixth = document.createElement("input");
 input_tech_skill_sixth.setAttribute("type","range");
 input_tech_skill_sixth.style.width="250px";
 input_tech_skill_sixth.style.height="5px";
 input_tech_skill_sixth.style.background="#d3d3d3";
 input_tech_skill_sixth.style.outline="none";
 input_tech_skill_sixth.style.transition = "opacity .2s";

 // Technical Skill 7 = Deployment
 const div_tech_skill_seventh = document.createElement("div");
 div_tech_skill_seventh.style.height="20px";
 div_tech_skill_seventh.style.display="flex";
 div_tech_skill_seventh.style.justifyContent="space-between";
 div_tech_skill_seventh.style.alignItems="center";

 const para_tech_skill_seventh_name = document.createElement("p");
 para_tech_skill_seventh_name.innerText = "Deployment";
 para_tech_skill_seventh_name.style.fontSize="15px";
 const div_tech_skill_seventh_range_container = document.createElement("div");

 const input_tech_skill_seventh = document.createElement("input");
 input_tech_skill_seventh.setAttribute("type","range");
 input_tech_skill_seventh.style.width="250px";
 input_tech_skill_seventh.style.height="5px";
 input_tech_skill_seventh.style.background="#d3d3d3";
 input_tech_skill_seventh.style.outline="none";
 input_tech_skill_seventh.style.transition = "opacity .2s";
 
// Appending Heading : Technical Skill
 div_skill.append(div_skill_body);
 div_skill_body.append(div_skill_types_one);
 div_skill_types_one.append(div_skill_type_one);
 div_skill_type_one.append(para_skill_type_one_heading);

// Appending Technical Skill 1 - Javascript
 div_skill_types_one.append(div_tech_skill_one);
 div_tech_skill_one.append(para_tech_skill_one_name);
 div_tech_skill_one.append(div_tech_skill_one_range_container);
 div_tech_skill_one_range_container.append(input_tech_skill_one);

// Appending Technical Skill 2 - CSS
 div_skill_types_one.append(div_tech_skill_two);
 div_tech_skill_two.append(para_tech_skill_two_name);
 div_tech_skill_two.append(div_tech_skill_two_range_container);
 div_tech_skill_two_range_container.append(input_tech_skill_two);

 // Appending Technical Skill 3 - HTML
 div_skill_types_one.append(div_tech_skill_three);
 div_tech_skill_three.append(para_tech_skill_three_name);
 div_tech_skill_three.append(div_tech_skill_three_range_container);
 div_tech_skill_three_range_container.append(input_tech_skill_three);

 // Appending Technical Skill 4 - React
 div_skill_types_one.append(div_tech_skill_fourth);
 div_tech_skill_fourth.append(para_tech_skill_fourth_name);
 div_tech_skill_fourth.append(div_tech_skill_fourth_range_container);
 div_tech_skill_fourth_range_container.append(input_tech_skill_fourth);

// Appending Technical Skill 5 - Redux 
 div_skill_types_one.append(div_tech_skill_fifth);
 div_tech_skill_fifth.append(para_tech_skill_fifth_name);
 div_tech_skill_fifth.append(div_tech_skill_fifth_range_container);
 div_tech_skill_fifth_range_container.append(input_tech_skill_fifth);

 // Appending Technical Skill 6 - Mongo
 div_skill_types_one.append(div_tech_skill_sixth);
 div_tech_skill_sixth.append(para_tech_skill_sixth_name);
 div_tech_skill_sixth.append(div_tech_skill_sixth_range_container);
 div_tech_skill_sixth_range_container.append(input_tech_skill_sixth);

 // Appending Technical Skill 7 - Deployment
 div_skill_types_one.append(div_tech_skill_seventh);
 div_tech_skill_seventh.append(para_tech_skill_seventh_name);
 div_tech_skill_seventh.append(div_tech_skill_seventh_range_container);
 div_tech_skill_seventh_range_container.append(input_tech_skill_seventh);

 //Skill Types Container
 const div_skill_types_two = document.createElement("div");

 // Skill Type two
 const div_skill_type_two = document.createElement("div");
 div_skill_type_two.style.display="flex";
 div_skill_type_two.style.justifyContent="space-around";

 // Skill Type Two Heading = Additional Skills
 const para_skill_type_two_heading = document.createElement("p");
 para_skill_type_two_heading.innerText = "Additional Skills";
 para_skill_type_two_heading.style.fontWeight="bold";
 para_skill_type_two_heading.style.fontSize="15px";

 // Additional Skill 1 = Project Management
 const div_additional_skill_one = document.createElement("div");
 div_additional_skill_one.style.height="20px";
 div_additional_skill_one.style.display="flex";
 div_additional_skill_one.style.justifyContent="space-between";
 div_additional_skill_one.style.alignItems="center";

 const para_additional_skill_one_name = document.createElement("p");
 para_additional_skill_one_name.innerText = "Project Management";
 para_additional_skill_one_name.style.fontSize="15px";
 
 const div_additional_skill_one_range_container = document.createElement("div");
 const input_additional_skill_one = document.createElement("input");
 input_additional_skill_one.setAttribute("type","range");
 input_additional_skill_one.style.width="250px";
 input_additional_skill_one.style.height="5px";
 input_additional_skill_one.style.background="#d3d3d3";
 input_additional_skill_one.style.outline="none";
 input_additional_skill_one.style.transition = "opacity .2s";

 // Additional Skill 2 = Recruitement
 const div_additional_skill_two = document.createElement("div");
 div_additional_skill_two.style.height="20px";
 div_additional_skill_two.style.display="flex";
 div_additional_skill_two.style.justifyContent="space-between";
 div_additional_skill_two.style.alignItems="center";

 const para_additional_skill_two_name = document.createElement("p");
 para_additional_skill_two_name.innerText = "Recruitment";
 para_additional_skill_two_name.style.fontSize="15px";
 
 const div_additional_skill_two_range_container = document.createElement("div");
 const input_additional_skill_two = document.createElement("input");
 input_additional_skill_two.setAttribute("type","range");
 input_additional_skill_two.style.width="250px";
 input_additional_skill_two.style.height="5px";
 input_additional_skill_two.style.background="#d3d3d3";
 input_additional_skill_two.style.outline="none";
 input_additional_skill_two.style.transition = "opacity .2s";

 // Additional Skill 3 = Business Development
 const div_additional_skill_three = document.createElement("div");
 div_additional_skill_three.style.height="20px";
 div_additional_skill_three.style.display="flex";
 div_additional_skill_three.style.justifyContent="space-between";
 div_additional_skill_three.style.alignItems="center";

 const para_additional_skill_three_name = document.createElement("p");
 para_additional_skill_three_name.innerText = "Business Development";
 para_additional_skill_three_name.style.fontSize="15px";
 
 const div_additional_skill_three_range_container = document.createElement("div");
 const input_additional_skill_three = document.createElement("input");
 input_additional_skill_three.setAttribute("type","range");
 input_additional_skill_three.style.width="250px";
 input_additional_skill_three.style.height="5px";
 input_additional_skill_three.style.background="#d3d3d3";
 input_additional_skill_three.style.outline="none";
 input_additional_skill_three.style.transition = "opacity .2s";

 // Additional Skill 4 = Editing
 const div_additional_skill_fourth = document.createElement("div");
 div_additional_skill_fourth.style.height="20px";
 div_additional_skill_fourth.style.display="flex";
 div_additional_skill_fourth.style.justifyContent="space-between";
 div_additional_skill_fourth.style.alignItems="center";

 const para_additional_skill_fourth_name = document.createElement("p");
 para_additional_skill_fourth_name.innerText = "Editing";
 para_additional_skill_fourth_name.style.fontSize="15px";
 
 const div_additional_skill_fourth_range_container = document.createElement("div");
 const input_additional_skill_fourth = document.createElement("input");
 input_additional_skill_fourth.setAttribute("type","range");
 input_additional_skill_fourth.style.width="250px";
 input_additional_skill_fourth.style.height="5px";
 input_additional_skill_fourth.style.background="#d3d3d3";
 input_additional_skill_fourth.style.outline="none";
 input_additional_skill_fourth.style.transition = "opacity .2s";

 // Additional Skill 5 = Fundraising
 const div_additional_skill_fifth = document.createElement("div");
 div_additional_skill_fifth.style.height="20px";
 div_additional_skill_fifth.style.display="flex";
 div_additional_skill_fifth.style.justifyContent="space-between";
 div_additional_skill_fifth.style.alignItems="center";
 div_additional_skill_fifth.style.marginBottom="15px";

 const para_additional_skill_fifth_name = document.createElement("p");
 para_additional_skill_fifth_name.innerText = "Fundraising";
 para_additional_skill_fifth_name.style.fontSize="15px";
 
 const div_additional_skill_fifth_range_container = document.createElement("div");
 const input_additional_skill_fifth = document.createElement("input");
 input_additional_skill_fifth.setAttribute("type","range");
 input_additional_skill_fifth.style.width="250px";
 input_additional_skill_fifth.style.height="5px";
 input_additional_skill_fifth.style.background="#d3d3d3";
 input_additional_skill_fifth.style.outline="none";
 input_additional_skill_fifth.style.transition = "opacity .2s";

 // Appending Heading => Additional Skills
 div_skill_body.append(div_skill_types_two);
 div_skill_types_two.append(div_skill_type_two);
 div_skill_type_two.append(para_skill_type_two_heading);

 // Appending Additional Skill 1 => Project Management
 div_skill_types_two.append(div_additional_skill_one);
 div_additional_skill_one.append(para_additional_skill_one_name);
 div_additional_skill_one.append(div_additional_skill_one_range_container);
 div_additional_skill_one_range_container.append(input_additional_skill_one);

 // Appending Additional Skilll 2 => Recruitement
 div_skill_types_two.append(div_additional_skill_two);
 div_additional_skill_two.append(para_additional_skill_two_name);
 div_additional_skill_two.append(div_additional_skill_two_range_container);
 div_additional_skill_two_range_container.append(input_additional_skill_two);

 // Appending Additional Skill 3 => Business Development
 div_skill_types_two.append(div_additional_skill_three);
 div_additional_skill_three.append(para_additional_skill_three_name);
 div_additional_skill_three.append(div_additional_skill_three_range_container);
 div_additional_skill_three_range_container.append(input_additional_skill_three);

 // Appending Additional Skill 4 => Editing
 div_skill_types_two.append(div_additional_skill_fourth);
 div_additional_skill_fourth.append(para_additional_skill_fourth_name);
 div_additional_skill_fourth.append(div_additional_skill_fourth_range_container);
 div_additional_skill_fourth_range_container.append(input_additional_skill_fourth);

 // Appending Additional Skill 5 => Fundraising
 div_skill_types_two.append(div_additional_skill_fifth);
 div_additional_skill_fifth.append(para_additional_skill_fifth_name);
 div_additional_skill_fifth.append(div_additional_skill_fifth_range_container);
 div_additional_skill_fifth_range_container.append(input_additional_skill_fifth);


// Resume Left - Section 3 - Experience
const div_experience_left = document.createElement("div");

// Experience Header
const div_experience_header_left = document.createElement("div");
div_experience_header_left.style.display="flex";
div_experience_header_left.style.alignItems="center";
div_experience_header_left.style.padding = "4px";
div_experience_header_left.style.height ="25px";

// Experience Icon
const experience_icon_left = document.createElement("i");
experience_icon_left.classList.add("fa-solid","fa-briefcase");
experience_icon_left.style.fontSize = "30px";
experience_icon_left.style.marginRight = "10px";
experience_icon_left.style.color = "#E14D2A";

// Experience Heading
const experience_heading_left = document.createElement("h2");
experience_heading_left.innerText = "Work Experience";

// Appending Experience Icon and Experience Heading
div_resume_body_left.append(div_experience_left);
div_experience_left.append(div_experience_header_left);
div_experience_header_left.append(experience_icon_left);
div_experience_header_left.append(experience_heading_left);

// Experience Body
const div_experience_body_left = document.createElement("div");
div_experience_body_left.style.padding="10px";
const div_company_name_left = document.createElement("div");
div_company_name_left.style.display="flex";
div_company_name_left.style.justifyContent="space-between";

// Experience Company Name
const para_company_name_left = document.createElement("p");
para_company_name_left.innerHTML = "<b>Event Manager</b> <br/>C3 Presents, Washington DC";
para_company_name_left.style.fontSize = "15px";

// Experience - Duration
const para_experience_duration_left = document.createElement("p");
para_experience_duration_left.innerText = "03/2014 - 02/2017";


//Appending Company Name and Duration of experience
div_experience_left.append(div_experience_body_left);
div_experience_body_left.append(div_company_name_left);
div_company_name_left.append(para_company_name_left);
div_company_name_left.append(para_experience_duration_left);

// Company work 
const div_company_experience_left = document.createElement("div");
const experience_ul_left = document.createElement("ul");
experience_ul_left.style.paddingLeft = "30px";

const experience_li_one_left = document.createElement("li");
experience_li_one_left.innerText = `Lead and execute all phases of event planning and production spanning committe recruitment, training, vendor relationships and on-site facilitation`;
experience_li_one_left.style.fontSize="15px";

const experience_li_two_left = document.createElement("li");
experience_li_two_left.innerText = ` Brought new business to the organization through relent less networking and stewardship which helped the company win the bid for State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.`;
experience_li_two_left.style.fontSize="15px";

const experience_li_three_left = document.createElement("li");
experience_li_three_left.innerText = `Exercise fiscal control over budget creation,tracking and the reporting. Collaborate with employees at all organizational levels to advance cohesive operations.`;
experience_li_three_left.style.fontSize="15px";

//Appending Company works 
div_experience_body_left.append(div_company_experience_left);
div_company_experience_left.append(experience_ul_left);
experience_ul_left.append(experience_li_one_left);
experience_ul_left.append(experience_li_two_left);
experience_ul_left.append(experience_li_three_left);

//Resume Body - Right
const div_resume_body_right = document.createElement("div");
div_resume_body_right.setAttribute("class","resume-body-right");
div_resume_body_right.style.width="50%";
div_resume_body_right.style.textAlign="justify";
div_resume_body_right.style.padding ="20px";

// Resume Right - Section 1 - Experience
const div_experience_right = document.createElement("div");

// Experience Header
const div_experience_header_right = document.createElement("div");
div_experience_header_right.style.display="flex";
div_experience_header_right.style.alignItems="center";
div_experience_header_right.style.padding = "4px";
div_experience_header_right.style.height ="25px";

// Experience Icon
const experience_icon_right = document.createElement("i");
experience_icon_right.classList.add("fa-solid","fa-briefcase");
experience_icon_right.style.fontSize = "30px";
experience_icon_right.style.marginRight = "10px";
experience_icon_right.style.color = "#E14D2A";

// Experience Heading
const experience_heading_right = document.createElement("h2");
experience_heading_right.innerText = "Work Experience";

// Appending Experience Icon and Experience Heading
div_resume_body.append(div_resume_body_right);
div_resume_body_right.append(div_experience_right);
div_experience_right.append(div_experience_header_right);
div_experience_header_right.append(experience_icon_right);
div_experience_header_right.append(experience_heading_right);

// Experience Body
const div_experience_body_right = document.createElement("div");
div_experience_body_right.style.padding="10px";
const div_company_name_right = document.createElement("div");
div_company_name_right.style.display="flex";
div_company_name_right.style.justifyContent="space-between";

// Company Name
const para_company_name_right = document.createElement("p");
para_company_name_right.innerHTML = `<b>Community Relations<br/>Manager</b><br/>Gay & Lesbian Elder Housing, Los Angeles`;
para_company_name_right.style.fontSize = "15px";

// Experience - Duration
const para_experience_duration_right = document.createElement("p");
para_experience_duration_right.innerText = "03/2014 - 02/2017";

// Appending Company Name and Duration of experience
div_experience_right.append(div_experience_body_right);
div_experience_body_right.append(div_company_name_right);
div_company_name_right.append(para_company_name_right);
div_company_name_right.append(para_experience_duration_right);

// Company Works
const div_company_experience_right = document.createElement("div");
const experience_ul_right = document.createElement("ul");

// Company Work Explanation
experience_ul_right.style.paddingright = "30px";
const experience_li_one_right = document.createElement("li");
experience_li_one_right.innerText = "Arranging presentations and pitch deck."
experience_li_one_right.style.fontSize="15px";

const experience_li_two_right = document.createElement("li");
experience_li_two_right.innerText = `Designing a PR Plan and establishing important.`;
experience_li_two_right.style.fontSize="15px";

const experience_li_three_right = document.createElement("li");
experience_li_three_right.innerText = `Designing, creating and managing content across multiple communication platforms.`;
experience_li_three_right.style.fontSize="15px";

const experience_li_fourth_right = document.createElement("li");
experience_li_fourth_right.innerText = `Building relationships with key media players`;
experience_li_fourth_right.style.fontSize="15px";

// Appending Company works
div_experience_body_right.append(div_company_experience_right);
div_company_experience_right.append(experience_ul_right);
experience_ul_right.append(experience_li_one_right);
experience_ul_right.append(experience_li_two_right);
experience_ul_right.append(experience_li_three_right);
experience_ul_right.append(experience_li_fourth_right);

// Resume Right - Section 2 - Education
const div_education = document.createElement("div");

// Education Header
const div_education_header = document.createElement("div");
div_education_header.style.display="flex";
div_education_header.style.alignItems="center";
div_education_header.style.padding ="4px";
div_education_header.style.height="25px";

// Education Icon
const education_icon = document.createElement("i");
education_icon.classList.add("fa-solid","fa-graduation-cap");
education_icon.style.fontSize="30px";
education_icon.style.marginRight="10px";
education_icon.style.color="#E14D2A";

// Education Heading
const education_heading = document.createElement("h2");
education_heading.innerText = "Education";

// Appending Education Icon and Education Heading
div_resume_body_right.append(div_education);
div_education.append(div_education_header);
div_education_header.append(education_icon);
div_education_header.append(education_heading);

// Education Body
const div_education_body = document.createElement("div");
div_education_body.style.padding="10px";

// Education Institution - One
const div_education_institution_name_one = document.createElement("div");
div_education_institution_name_one.style.display="flex";
div_education_institution_name_one.style.justifyContent="space-between";
div_education_institution_name_one.style.alignItems="center";

// Name of the Institution - One
const para_education_institution_name_one = document.createElement("p");
para_education_institution_name_one.innerHTML = `<p><b>Engineering Immersion<br/>Program</b><br/>Thinkful, Chicago, IL</p>`;
para_education_institution_name_one.style.fontSize="15px";

// Duration of Institution
const para_education_institution_name_one_duration = document.createElement("p");
para_education_institution_name_one_duration.innerText = "11/2018 - 06/2018";
para_education_institution_name_one_duration.style.fontSize="15px";

// Appending Name of the Institution and Duration
div_education.append(div_education_body);
div_education_body.append(div_education_institution_name_one);
div_education_institution_name_one.append(para_education_institution_name_one);
div_education_institution_name_one.append(para_education_institution_name_one_duration);

// Institution Projects 
const div_institution_one_works = document.createElement("div");
const para_institution_one_work = document.createElement("p");
para_institution_one_work.innerText ="Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.";
para_institution_one_work.style.fontSize="15px";

// Project Details
const institution_one_ul = document.createElement("ul");
institution_one_ul.style.paddingLeft="30px";
const institution_one_li_one = document.createElement("li");
institution_one_li_one.innerText=`Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.`;
institution_one_li_one.style.fontSize="15px";

const institution_one_li_two = document.createElement("li");
institution_one_li_two.innerText=`Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.`;
institution_one_li_two.style.fontSize="15px";

const institution_one_li_three = document.createElement("li");
institution_one_li_three.innerText = `Developed a concierge app, "Pley", for individuals looking fo curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chats, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.`;
institution_one_li_three.style.fontSize="15px";

// Appending Academics Project Details
div_education_body.append(div_institution_one_works);
div_institution_one_works.append(para_institution_one_work);
div_institution_one_works.append(institution_one_ul);
institution_one_ul.append(institution_one_li_one);
institution_one_ul.append(institution_one_li_two);
institution_one_ul.append(institution_one_li_three);

// Education Institution - two
const div_education_institution_name_two = document.createElement("div");
div_education_institution_name_two.style.display="flex";
div_education_institution_name_two.style.justifyContent="space-between";
div_education_institution_name_two.style.alignItems="center";

// Name of the Institution
const para_education_institution_name_two = document.createElement("p");
para_education_institution_name_two.innerHTML = `<p><b>BA English</b><br/>University of California, Los Angles</p>`;
para_education_institution_name_two.style.fontSize="15px";

// Duration of Institution
const para_education_institution_name_two_duration = document.createElement("p");
para_education_institution_name_two_duration.innerText = "09/2001 - 09/2005";
para_education_institution_name_two_duration.style.fontSize="15px";

// Appending Name of the Institution and Duration
div_education_body.append(div_education_institution_name_two);
div_education_institution_name_two.append(para_education_institution_name_two);
div_education_institution_name_two.append(para_education_institution_name_two_duration);