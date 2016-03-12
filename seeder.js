// this is the same as running `use pimp_my_cause` from the shell
var db = db.getSiblingDB('pimp_my_cause');

// delete any data that was already there
db.dropDatabase();

//***************** User Collection *****************//
var jsonUsers = {
  users : [
    {
      type : "Marketer",
      name : "Sam Lund",
      email : "slund.test@gmail.com",
      password : "123456!",
      image : "image1.jpg",
      website : "http://womenhackfornonprofits.github.io/pimpmycause-rebuild/create-account.html",
      twitter_handle : "@slund",
      postcode : "w6 7as",
      city : "London",
      country : "UK",
      biography : "Lorem ipsum dolor sit amet, mei quodsi forensibus argumentum ut, no pri virtute labores. Eu mei ceteros molestie recusabo, liber explicari sadipscing te pro. Possit sensibus ea nec, duo graeco ancillae ei. Mel tempor fierent definitiones ei, zril decore percipit ut nec.",
      skills : "",
      phone_number : "0908980985",
      job_role : "Project Manager",
      experience : "Eu mei ceteros molestie recusaboo ipsum dolor sit amet",
      education : "mei quodsi forensibus argumentum ut, no pri virtute labores",
      number_of_logins : 1,
      number_of_nominations : 0,
      registration_date : "2013-05-11",
      is_account_activated : true,
      last_login: "",
      is_available: true
    },
    {
      type : "Marketer",
      name : "Bill Noor",
      email : "billnoor.test@gmail.com",
      password : "abc123)",
      image : "",
      website : "https://www.npmjs.com/package/seeder",
      twitter_handle : "@bnoor",
      postcode : "",
      city : "Brighton",
      country : "UK",
      biography : "Lorem ipsum dolor sit amet, mei quodsi forensibus argumentum ut, no pri virtute labores. Eu mei ceteros molestie recusabo, liber explicari sadipscing te pro.",
      skills : "",
      phone_number : "05673456890",
      job_role : "Technician",
      experience : "no pri virtute labores. Eu mei ceteros molestie recusabo.",
      education : "lorem ipsum dolor sit amet, mei quodsi forensibus argumentum ut, no pri virtute labores",
      number_of_logins : 2,
      number_of_nominations : 3,
      registration_date : "2015-06-01",
      is_account_activated : true,
      last_login : "",
      is_available: true
    },
    {
      type : "Marketer",
      name : "Roger Riola",
      email : "rriola.test@windowslive.com",
      password : "password",
      image : "",
      website : "https://www.youtube.co.uk/'",
      twitter_handle : "@rogerriola",
      postcode : "w6 7qy",
      city : "London",
      country : "UK",
      biography : "Nec autem fabellas et, nam ut animal omittam pericula.",
      skills : "",
      phone_number : "08453846214",
      job_role : "Company Administator",
      experience : "Eu mei ceteros molestie recusabo, liber explicari sadipscing te pro",
      education : "liber explicari'",
      number_of_logins : 2,
      number_of_nominations : 0,
      registration_date : "2016-02-03",
      is_account_activated : true,
      last_login : "",
      is_available : true
    }
  ]
};

var usersRaw = [];

for (var i = 0; i < jsonUsers.users.length; i++) {
  usersRaw.push(jsonUsers.users[i]);
};

db.Users.insert(usersRaw);


//***************** Causes Collection *****************//
var jsonCauses = {
  causes : [
    {
      type : "Cause",
      name : "WHFNP",
      email : "mock@whfnp.co.uk",
      password : "wh4np@uk",
      image : "",
      website : "http://www.womenhackfornonprofits.com/",
      phone_number : "",
      twitter_handle : "@WHFNP",
      sector : "Women in Tech",
      biography : "Women Hack for Non-Profits matchmakes skilled women in technology to open source projects for non-profits, charities and individuals with a good social cause. By doing so, we aim to enhance the skill set of Women in Tech to support their growth and increase their footprint in the open source community.",
      postcode : "SW1A 1AA",
      city : "London",
      country : "UK",
      video : "",
      representative : "",
      job_role : "",
      is_account_activated : true,
      registration_date : "2015-05-01",
      last_login : "",
      help_wanted_ads : [{
        headline : "",
        details : "",
        skills_wanted : "",
        deadline : ""
      }]
    },
    {
      type : "Cause",
      name : "Empower Hack",
      email : "mock@empowerhack.org",
      password : "empow3r!",
      image : "",
      website : "http://empowerhack.io/",
      phone_number : "",
      twitter_handle : "@EmpowerHack",
      sector : "Humanitarian",
      biography : "EmpowerHack is a collective that brings creates sustainable design for women and girls in humanitarian contexts. Bridging the gap between technology, design, and NGOs to address key challenges, Empower Hack galvanises volunteers to create code that crosses borders.",
      postcode : "SW1A 0AA",
      city : "London",
      country : "UK",
      video : "",
      representative : "",
      job_role : "",
      is_account_activated : true,
      registration_date : "2015-08-22",
      last_login : "",
      help_wanted_ads : [{
        headline : "",
        details : "",
        skills_wanted : "",
        deadline : ""
      }]
    },
    {
      type : "Cause",
      name : "Plastic Alternatives",
      email : "mock@plasticAlt.com",
      password : "+ticAl8",
      image : "",
      website : "https://en.wikipedia.org/wiki/Green_home",
      phone_number : "",
      twitter_handle : "@TheDaiIyKitten",
      sector : "Recycle",
      biography : "Help you find products and tools that do not use plastic.",
      postcode : "NW1 6XE",
      city : "London",
      country : "UK",
      video : "",
      representative : "",
      job_role : "",
      is_account_activated : true,
      registration_date : "2016-02-29",
      last_login : "",
      help_wanted_ads : [{
        headline : "",
        details : "",
        skills_wanted : "",
        deadline : ""
      }]
    }
  ]
};

var causesRaw = [];

for (var i = 0; i < jsonCauses.causes.length; i++) {
  causesRaw.push(jsonCauses.causes[i]);
};

db.Causes.insert(causesRaw);
