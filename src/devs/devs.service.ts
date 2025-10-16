import { Injectable } from '@nestjs/common';

@Injectable()
export class DevsService {

  
   private developers = [
    {
    id: 1,
    name: "Md Shamim Hossain",
    age: 24,
    cell: "+8801711000001",
    email: "shamim.dev@example.com",
    location: "Dhaka, Bangladesh",
    gender: "Male"
  },
  {
    id: 2,
    name: "Md Shakib Hasan",
    age: 23,
    cell: "+8801711000002",
    email: "shakib.dev@example.com",
    location: "Khulna, Bangladesh",
    gender: "Male"
  },
  {
    id: 3,
    name: "Ayesha Akter",
    age: 25,
    cell: "+8801711000003",
    email: "ayesha.dev@example.com",
    location: "Rajshahi, Bangladesh",
    gender: "Female"
  },
  {
    id: 4,
    name: "Tanvir Ahmed",
    age: 26,
    cell: "+8801711000004",
    email: "tanvir.dev@example.com",
    location: "Chattogram, Bangladesh",
    gender: "Male"
  },
  {
    id: 5,
    name: "Sumaiya Rahman",
    age: 22,
    cell: "+8801711000005",
    email: "sumaiya.dev@example.com",
    location: "Sylhet, Bangladesh",
    gender: "Female"
  },
  {
    id: 6,
    name: "Rafiul Islam",
    age: 27,
    cell: "+8801711000006",
    email: "rafiul.dev@example.com",
    location: "Barishal, Bangladesh",
    gender: "Male"
  },
  {
    id: 7,
    name: "Mim Chowdhury",
    age: 24,
    cell: "+8801711000007",
    email: "mim.dev@example.com",
    location: "Comilla, Bangladesh",
    gender: "Female"
  },
  {
    id: 8,
    name: "Hasan Mahmud",
    age: 29,
    cell: "+8801711000008",
    email: "hasan.dev@example.com",
    location: "Rangpur, Bangladesh",
    gender: "Male"
  },
  {
    id: 9,
    name: "Nafisa Karim",
    age: 23,
    cell: "+8801711000009",
    email: "nafisa.dev@example.com",
    location: "Mymensingh, Bangladesh",
    gender: "Female"
  },
  {
    id: 10,
    name: "Farhan Kabir",
    age: 28,
    cell: "+8801711000010",
    email: "farhan.dev@example.com",
    location: "Dhaka, Bangladesh",
    gender: "Male"
  },
  {
    id: 11,
    name: "Sadia Islam",
    age: 21,
    cell: "+8801711000011",
    email: "sadia.dev@example.com",
    location: "Gazipur, Bangladesh",
    gender: "Female"
  },
  {
    id: 12,
    name: "Mehedi Hasan",
    age: 30,
    cell: "+8801711000012",
    email: "mehedi.dev@example.com",
    location: "Jessore, Bangladesh",
    gender: "Male"
  },
  {
    id: 13,
    name: "Tania Akhter",
    age: 22,
    cell: "+8801711000013",
    email: "tania.dev@example.com",
    location: "Narayanganj, Bangladesh",
    gender: "Female"
  },
  {
    id: 14,
    name: "Asif Rahman",
    age: 27,
    cell: "+8801711000014",
    email: "asif.dev@example.com",
    location: "Bogura, Bangladesh",
    gender: "Male"
  },
  {
    id: 15,
    name: "Ruma Khatun",
    age: 24,
    cell: "+8801711000015",
    email: "ruma.dev@example.com",
    location: "Kushtia, Bangladesh",
    gender: "Female"
  }
   ] 


   getAllDevs(){
    return this.developers
   }


   //  Get single developer data by id
   getSingleDev(id){
    const singleData =  this.developers.find(dev => dev.id === parseInt(id))


    return{
        message : true,
        data : singleData
    }

   }




// Create new developer data
   createDev(dev){
    this.developers.push(dev)
    return{
        success: true,
      message: 'User created successfully',
      data: dev,
    }
   }


}
