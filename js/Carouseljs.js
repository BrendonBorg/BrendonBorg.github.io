var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin2(sign) {
    spinner2 = document.querySelector("#spinner2");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner2.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin3(sign) {
    spinner3 = document.querySelector("#spinner3");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner3.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin4(sign) {
    spinner4 = document.querySelector("#spinner4");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner4.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin5(sign) {
    spinner5 = document.querySelector("#spinner5");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner5.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin6(sign) {
    spinner6 = document.querySelector("#spinner6");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner6.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin7(sign) {
    spinner7 = document.querySelector("#spinner7");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner7.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspin8(sign) {
    spinner8 = document.querySelector("#spinner8");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner8.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}


function HideAndShow(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Drilldown(y) {

    if (y == '1') {

        var myString =
            'We provide guards services for those in need of continues protection.' + '<br/> ' +
            'Guard Placement as requested, with 24 hours, 3 days, 3 Nights, 3 Days off.' + '<br/> ' +
            'Training and qualification levels for employees of guards vary from D Grade Rank - A Grade Rank, the guards movements are monitored as well as vehicles on site.' + '<br/> ' +
            'The guards survey the area and Patrol it. These guards can search your staf or your vehicles entering the premises through access control and report writing.';
     
        var x = document.getElementById("one");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
            debugger;
        } else { // hides,  Long Paragraph
            x.style.display = "block";
            debugger;
            if (document.getElementById("lbl1").innerHTML === "(Read more)") {
                debugger;
                document.getElementById("pDrillDown1").innerHTML = myString;
                document.getElementById("lbl1").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl1").innerHTML = "(Read more)";
                document.getElementById("pDrillDown1").innerHTML = 'We provide guards services for those in need of continues protection.' + '<br/> ' +
                    'Guard Placement as requested, with 24 hours, 3 days, 3 Nights, 3 Days off.' + '<br/> ' +
                    'Training and qualification levels for employees of guards vary, the guards movements are monitored as well as vehicles on site.';
            }
        }

        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
        var x = document.getElementById("five");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);

    }

   else if (y == '2') {
        var myString =
            'We provide emrgency services for those in need of immediate attention.' + '<br/> ' +
	    'On site or drives the patient to the closest hospital.' + '<br/> ' +
            'Emergency medical services(EMS), also known as ambulance services or paramedic services, are emergency services which treat illnesses and injuries that require an urgent medical response, providing out - of - hospital treatment and transport to definitive care.They may also be known as a first aid squad, FAST squad, emergency squad, rescue squad, ambulance squad, ambulance corps, life squad  or by other initialisms such as EMAS or EMARS.' + '<br/> ' +
            'In most places, the EMS can be summoned by members of the public(as well as medical facilities, other emergency services, businesses and authorities) via an emergency telephone number which puts them in contact with a control facility, which will then dispatch a suitable resource to deal with the situation.Ambulances are the primary vehicles for delivering EMS, though some also use cars, motorcycles, aircraft or boats.EMS agencies may also operate the non - emergency patient transport service, and some have units for technical rescue operations such as extrication, water rescue, and search and rescue.' + '<br/> ' +
            'As a first resort, the EMS provide treatment on the scene to those in need of urgent medical care.If it is deemed necessary, they are tasked with transferring the patient to the next point of care.This is most likely an emergency department of a hospital.Historically, ambulances only transported patients to care, and this remains the case in parts of the developing world.The term "emergency medical service" was popularised when these services began to emphasise diagnosis and treatment at the scene.In some countries, a substantial portion of EMS calls do not result in a patient being taken to hospital.' + '<br/> ' +
            'Training and qualification levels for members and employees of emergency medical services vary widely throughout the world.In some systems, members may be present who are qualified only to drive ambulances, with no medical training.In contrast, most systems have personnel who retain at least basic first aid certifications, such as basic life support(BLS).In English - speaking countries, they are known as emergency medical technicians(EMTs) and paramedics, with the latter having additional training such as advanced life support(ALS) skills.Physicians and nurses also provide pre - hospital care to varying degrees in different countries.' + '<br/> ' +
            'The road ambulance program is a critical component of the health care system and is often the first point of contact for individuals in an emergency situation.These road ambulance providers deliver pre - hospital medical services to the public.While the primary mandate of ambulances is to respond to patients in emergency situations, it is also used for the conveyance of routine patients requiring medical attention or under medical care who are unable to be transported by alternate means.Ambulances are staffed with trained personnel capable of responding to emergency calls and providing pre - hospital care while transporting the patient to the most appropriate medical facility for more assessment and treatment.';


        var x = document.getElementById("two");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
           
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl2").innerHTML === "(Read more)") {

                document.getElementById("pDrillDown2").innerHTML = myString;
                document.getElementById("lbl2").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl2").innerHTML = "(Read more)";
                document.getElementById("pDrillDown2").innerHTML = 'We provide emrgency services for those in need of immediate attention.' + '<br/> ' +
                    'On site or drives the patient to the closest hospital. Training and qualification levels for members and employees of emergency medical services vary widely throughout the world. As a first resort, the EMS provide treatment on the scene to those in need of urgent medical care.';            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
        var x = document.getElementById("five");
        HideAndShow(x);
 var x = document.getElementById("six");
        HideAndShow(x);
 var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }
    else if (y == '3') {

        var myString =
            'A dog police force that is meant to sniff out drugs, and bad guys.' + '<br/> ' +
            'A German Shepherd is one of the most common types of K9 security dogs and were the first ever dog to be chosen and used as a K9.' + '<br/> ' +
            'However, there are many different breeds of dogs that provide police services.' + '<br/> ' +
            'Often K9 police dog training takes about ten weeks.' + '<br/> ' +
            'Obedience training is one of the most important lessons in police K9 training as it is vital that law - enforcement dogs can' +
            'protect and guard without causing disruptions and misbehaving.' + '<br/> ' +
            'It is necessary for guard dogs to follow orders without hesitation, ' +
            'so that their customers receive optimal protection and security.' + '<br/> ' +

            'A lot of security dogs live with their handler, ' +
            'which assists in forming a stronger relationship between the handler and the guard dog, ' +
            'helping them to trust and care for each other. ' + '<br/> ' +
            'This is developed further as it is up to the owner to care for the dog, from feeding to grooming them.' + '<br/> ' +

            'Specialised police dogs are often trained to perform multiple duties, such as:' + '<br/> ' +
            'Finding drugs' + '<br/> ' +
            ' Searching for explosives' + '<br/> ' +
            'Looking for lost people' + '<br/> ' +

            'Discovering crime scenes' + '<br/> ' +

            'The security patrol dog’s main task is to help protect the area they are guarding, while standing alongside their handler.' + '<br/> ' +

            'These mobile patrol dogs listen to their owner’s and handler’s every command while keeping a look out for a threat that may be made on the premises they are guarding.' + '<br/> ' +
            'Their main aim is to both protect people from danger and to help protect their owners and handlers from any oncoming risks.' + '<br/> ' +


            'From being on guard at airports, to assisting at crime scenes and mobile dog patrols, there are an endless amount of advantages to having a police dog at your side.' + '<br/> ' +

            'Not only do they help put an end to any harm that could occur, but they also help prevent from problems occurring.' + '<br/> ' +

            'This is because when the public see a guard and a dog on duty, as it is seen as a threat, helping to possibly put an end to any plans people had in mind.' + '<br/> ' +

            'K-9 police officers work closely with their dogs to enforce laws and apprehend criminals.' +
            'With relatively few positions available in the field, working in the K-9 unit is highly coveted among law enforcement professionals.' + '<br/> ' +

            'K-9 officers can work in local, state, and federal law enforcement, as well as in the military. Many end up as Police Dogs.' +

            'The dogs duties may include:' + '<br/> ' +
            'Patrolling assigned areas with a trained dog or chance downs during arrests' + '<br/> ' +
            'Inspecting crime scenes and finding and securing evidence' + '<br/> ' + '<br/> ' +
            'A K-9 handler can use their dog to enforce public order while on patrol.' + '<br/> ' +
            'Dogs tend to be trained for one specialty skill such as identifying narcotics or smuggled goods,' + '<br/> ' + '<br/> ' +
            'performing search and rescue operations, detecting accelerants at arson scenes, or locating human remains.' + '<br/> ' +


            'The dog is a proven deterrent to criminals who might otherwise try to approach the officer.' +
            'The handler must be responsible for maintaining complete control of the dog at all times, as this is a source of potential liability.' + '<br/> ' +

            'K-9 partners frequently work nights and weekends, and they have to be ready to respond to emergency situations at a moments notice' +
            'The handler is responsible for the dog at all times, as the dog lives with the officer and their companions during off hours.' + '<br/> '; 
     
        var x = document.getElementById("three");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl3").innerHTML === "(Read more)") {

                document.getElementById("pDrillDown3").innerHTML = myString;
                document.getElementById("lbl3").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl3").innerHTML = "(Read more)";
                document.getElementById("pDrillDown3").innerHTML = "We have dogs that we use to do raids with. These dogs are highly trained at an academy and are then integrated with our staff. These attack dogs can also defend a person if needed.";
            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
        var x = document.getElementById("five");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }
    else if (y == '4') {
        var myString =

            'There are varying types of executive protection.They can generally be divided into the following categories:' + '<br/> ' +

            'Protective measures may include home security systems, bodyguards, armored vehicles and vehicle scramble plans, mail screening, private jet travel, background checks for other employees, and other precautions.Executive protection may also provide security for immediate and / or extended family members to prevent kidnapping and extortion.' + '<br/> ' +

            'Executive protection is its own highly specialized field within the private security industry.Elite executive protection professionals will have specialized training in executive protection, driving, first aid, and marksmanship.' + '<br/> ' +

            'The term executive protection was coined in the 1970s by the United States Secret Service when they created the Executive Protection Service to guard visiting foreign dignitaries.' + '<br/> ' + '<br/> ' +

            'High - threat protection for dignitaries traveling internationally' + '<br/> ' +
            'Corporate executive protection for high net - worth corporate officers' + '<br/> ' +
            'Celebrity close protection' + '<br/> ' +
            'The defining characteristics among these categories are first, the amount of resources available for the task, and second the types of environments that they operate in on a routine basis.' + '<br/> ' + '<br/> ' +

            'The manner in which VIP protection has been depicted in films has lead people to believe that it is a glamorous job that involves speeding off in fancy cars and' + '<br/> ' +
            'protecting those individuals from highly violent criminals who are out to seek revenge.This could not be further from the truth.' + '<br/> ' +
            'While it is true that those security personnel that offer VIP protection are' + '<br/> ' +
            'indeed highly - skilled and(usually) highly - experienced individuals,' + '<br/> ' +
            'they are not usually in the public eye like their TV counterparts. So' + '<br/> ' +
            'what exactly is real life VIP protection and what does it entail' + '<br/> ' +
            'Let us take a closer look:' + '<br/>' + '<br/> ' +

            'As the name suggests VIP protection means providing executive protection to anyone that may need it. The type of people that ask for VIP security protection' + '<br/> ' +
            'may include celebrities, politicians, dignitaries, and business' + '<br/> ' +
            'executives but may also include those who have had some sort of' + '<br/> ' +
            'threat against them.In essence VIP security encompasses protection' + '<br/> ' +
            'as a whole not just of the individuals themselves, but in many cases' + '<br/> ' +
            'their families and assets too.' + '<br/> ' + '<br/> ' +

            'Security companies who offer this service need to have personnel who are skilled in a number of areas and what is more it is not limited to men.' + '<br/> ' +
            'Surprisingly women also make good VIP protection officers because they are not big and' + '<br/> ' +
            'bulky like your archetypal bodyguard might be and as a result, ' + '<br/> ' +
            'theycan easily blend into the background anonymously.' + '<br/>' + '<br/> ' +

            'A German Shepherd is one of the most common types of K9 security dogs and were the first ever dog to be chosen and used as a K9.' + '<br/> ' +
            'However, there are many different breeds of dogs that provide police services.';

        var x = document.getElementById("four");
        if (x.style.display === "none") { //Displays Again,  Short Paragraph
            x.style.display = "block";
       
            //should not be reached ever
           
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl4").innerHTML === "(Read more)") {
               
                document.getElementById("pDrillDown4").innerHTML = myString;
                document.getElementById("lbl4").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl4").innerHTML = "(Read more)";
                document.getElementById("pDrillDown4").innerHTML = "We protect people with our VIP services. Our requested amount of guards are stationed around or alongside the VIP client as requested and then defend this person for the alloted amount of time.";
            }      
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("five");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }
    else if (y == '5') {
        var myString =
            'A revolving door typically consists of three or four doors that hang on a central shaft and rotate around a vertical axis within a cylindrical enclosure.Revolving doors are energy efficient as they (acting as an airlock) prevent drafts, thus decreasing the loss of heating or cooling for the building.Revolving doors were designed to relieve stack effect pressure in buildings.High - rise buildings experience immense pressure caused by air rushing through the building. At the same time, revolving doors allow large numbers of people to pass in and out.' + '<br/> ' +
            'The term door security may refer to any of a range of measures used to strengthen doors against door breaching, ram - raiding and lock picking, and prevent crimes such as burglary and home invasions.Door security is used in commercial and government buildings, as well as in residential settings.' + '<br/> ' +
            'Some strengthened doors function as fire doors to prevent or inhibit the spread of fire.' + '<br/> ' +
            'All components used in the manufacturing of expandable security doors / security gates are SABS approved.' + '<br/> ' +
            'No matter how many safety doors and security gates you have, it is important to always be aware.Here are a few essential tips for keeping safe in your home:' + '<br/> ' +
            'Alert the police immediately if somebody enters your home.' + '<br/> ' +
            'Never open your door to strangers.' + '<br/> ' +
            'Be very vigilant and never leave any tools lying around that can be used to break into your home.' + '<br/> ' +
            'Test your security alarm regularly.' + '<br/> ' +
            'Keep your cell phone / telephone in your bedroom, so that you can always call for help.' + '<br/> ' +
            'Always lock all the doors when you are inside your home.' + '<br/> ' +
            'Be sure that all windows are closed at night.' + '<br/> ' +
            'Always make sure your security alarm is armed before going to bed.';
                
        
        var x = document.getElementById("five");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl5").innerHTML === "(Read more)") {
                document.getElementById("pDrillDown5").innerHTML = myString;
                document.getElementById("lbl5").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl5").innerHTML = "(Read more)";
                document.getElementById("pDrillDown5").innerHTML = "We have security door installation services. Our team installs security gates from our selection at the allocated locations as requested and then will help keep your business safe during the hard times.";
            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }
    else if (y == '6') {
        var myString =
            'We install alarm systems for personal dwellings and company grounds.we send armed response and emergency services when alarms trigger. Silent panic alarms can be installed all over your business as well as remote control activation.';
        var x = document.getElementById("six");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl6").innerHTML === "(Read more)") {

                document.getElementById("pDrillDown6").innerHTML = myString;
                document.getElementById("lbl6").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl6").innerHTML = "(Read more)";
                document.getElementById("pDrillDown6").innerHTML
                    = 'We install alarm systems for personal dwellings and company grounds.we send armed response and emergency services when alarms trigger. Silent panic alarms can be installed all over your business as well as remote control activation.';
            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
	
        var x = document.getElementById("five");
        HideAndShow(x);

        var x = document.getElementById("seven");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }

    else if (y == '7') {
        var myString =
            'We protect people with our Surveilance services. Our requested amount of cameras are stationed around or alongside the perimiter based on where the client requested and then information is monitored and reports are printed monthly per request.' + '<br/> ' +
            'We gradually work out a well orchastrated plan on where every camera is to be placed to ensure maximum surveilance in the local area.' + '<br/> ' +
        'Guards can often overlook certain places or get circumvented by groups of trespassers, so then the camera system catches them on record as evidance and as a diary for the day in video form.' + '<br/> ' +
        'If camera systems are employed correctly, there are good chances of decreasing the crime in the area. Cameras is the future to always keeping your neighbourhood safe.';
        var x = document.getElementById("seven");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl7").innerHTML === "(Read more)") {

                document.getElementById("pDrillDown7").innerHTML = myString;
                document.getElementById("lbl7").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl7").innerHTML = "(Read more)";
                document.getElementById("pDrillDown7").innerHTML
                    = "We protect people with our Surveilance services. Our requested amount of cameras are stationed around or alongside the perimiter based on where the client requested and then information is monitored and reports are printed monthly per request.";
            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);	
        var x = document.getElementById("five");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("eight");
        HideAndShow(x);
    }

    else if (y == '8') {
        var myString =
            'We have trained personnel that will come and assess your event that you are planning and during its active periods and will inspect the safety of the premises and evernt and guards as well as medics can be placed at designated areas.' + '<br/> ' +
            'Event security is a service that gives event organizers the peace of mind they need to optimize the guest experience without compromising the safety of event participants or the integrity of critical assets.' + '<br/> ' +
            'Event security can monitor guest lists, allowing entry to only approved personnel at the entrance.' + '<br/> ' +
'Parking lot security keep their eyes on cars, guests and their vauluable.' + '<br/> ' +
            'The kind staff at stealth will even call you a cab home if you are no longer able to do so yourself.' + '<br/> ' +
'The security will also call their ambulance services closer if at any time somebody on the premises is in need of some first aid.' + '<br/> ' +
'The measures we take will ensure a visible deterent to any intruders are those with ill intent..' + '<br/> ' +

'The event Safety Officer contributes to all aspects of the event safety inductions, conducting workplace inspections, monitoring and inspection of contractor performance, etc., and consultation with key event stakeholders.' + '<br/> ' +
            'The duties of the safety officer are:.' + '<br/> ' +

'Inspections of contractors safety files.' + '<br/> ' +
            'Monitoring that workers are working in a safe manner.' + '<br/> ' +
'Ensuring that the revenue is compliant in terms of EMS requirements.' + '<br/> ' +
            'Ensuring the medics are visible.' + '<br/> ' +
            'Co-ordinating the various suppliers construction activities on site.';

        var x = document.getElementById("eight");
        if (x.style.display === "none") { //Displays Again  Short Paragraph
            x.style.display = "block";
        } else { // hides,  Long Paragraph
            x.style.display = "block";

            if (document.getElementById("lbl8").innerHTML === "(Read more)") {

                document.getElementById("pDrillDown8").innerHTML = myString;
                document.getElementById("lbl8").innerHTML = "(Read less)";
            } else {
                document.getElementById("lbl8").innerHTML = "(Read more)";
                document.getElementById("pDrillDown8").innerHTML
                    = "We have trained personnel that will come and assess your event that you are planning and during its active periods and will inspect the safety of the premises and evernt and guards as well as medics can be placed at designated areas.";
            }
        }

        var x = document.getElementById("one");
        HideAndShow(x);
        var x = document.getElementById("two");
        HideAndShow(x);
        var x = document.getElementById("three");
        HideAndShow(x);
        var x = document.getElementById("four");
        HideAndShow(x);
        var x = document.getElementById("five");
        HideAndShow(x);
        var x = document.getElementById("six");
        HideAndShow(x);
        var x = document.getElementById("seven");
        HideAndShow(x);
    }

}


