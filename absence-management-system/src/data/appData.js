// src/data/appData.js

/**
 * Application Data
 * Contains all static data for the application
 */
export const appData = {
    employees: [
      {
        id: 1,
        name: "Shreyas Kumar",
        email: "shreyas.kumar@company.com",
        phone: "+91-9876543210",
        systemName: "LDNR-DEV-01",
        systemIP: "192.168.1.101",
        department: "Development",
        role: "Senior Developer",
        location: "Bengaluru",
        manager: "T B Manjunath",
        joinDate: "2022-01-15",
        employeeId: "EMP001"
      },
      {
        id: 2,
        name: "Anushri Patel",
        email: "anushri.patel@company.com",
        phone: "+91-9876543211",
        systemName: "LDNR-QA-02",
        systemIP: "192.168.1.102",
        department: "Quality Assurance",
        role: "QA Lead",
        location: "Bengaluru",
        manager: "Suhas Reddy",
        joinDate: "2021-08-20",
        employeeId: "EMP002"
      },
      {
        id: 3,
        name: "Suhas Reddy",
        email: "suhas.reddy@company.com",
        phone: "+91-9876543212",
        systemName: "LDNR-DEV-03",
        systemIP: "192.168.1.103",
        department: "Development",
        role: "Tech Lead",
        location: "Bengaluru",
        manager: "T B Manjunath",
        joinDate: "2020-03-10",
        employeeId: "EMP003"
      },
      {
        id: 4,
        name: "T B Manjunath",
        email: "tb.manjunath@company.com",
        phone: "+91-9876543213",
        systemName: "LDNR-MGR-04",
        systemIP: "192.168.1.104",
        department: "Management",
        role: "Engineering Manager",
        location: "Bengaluru",
        manager: "CEO",
        joinDate: "2019-06-15",
        employeeId: "EMP004"
      },
      {
        id: 5,
        name: "Ganesh Ram B",
        email: "ganesh.ram@company.com",
        phone: "+91-9876543214",
        systemName: "LDNR-DEV-05",
        systemIP: "192.168.1.105",
        department: "Development",
        role: "Full Stack Developer",
        location: "Bengaluru",
        manager: "Suhas Reddy",
        joinDate: "2022-09-01",
        employeeId: "EMP005"
      },
      {
        id: 6,
        name: "Priya Sharma",
        email: "priya.sharma@company.com",
        phone: "+91-9876543215",
        systemName: "LDNR-DSN-06",
        systemIP: "192.168.1.106",
        department: "Design",
        role: "UI Designer",
        location: "Bengaluru",
        manager: "Design Head",
        joinDate: "2021-11-20",
        employeeId: "EMP006"
      },
      {
        id: 7,
        name: "Rajesh Kumar",
        email: "rajesh.kumar@company.com",
        phone: "+91-9876543216",
        systemName: "LDNR-QA-07",
        systemIP: "192.168.1.107",
        department: "Quality Assurance",
        role: "QA Engineer",
        location: "Bengaluru",
        manager: "Anushri Patel",
        joinDate: "2023-02-14",
        employeeId: "EMP007"
      },
      {
        id: 8,
        name: "Kavitha Nair",
        email: "kavitha.nair@company.com",
        phone: "+91-9876543217",
        systemName: "LDNR-HR-08",
        systemIP: "192.168.1.108",
        department: "Human Resources",
        role: "HR Manager",
        location: "Bengaluru",
        manager: "CEO",
        joinDate: "2020-08-30",
        employeeId: "EMP008"
      }
    ],
  
    departments: ["Development", "Quality Assurance", "Design", "Human Resources", "Management"],
    
    locations: ["Bengaluru", "Chennai", "Mumbai", "Hyderabad"],
    
    roles: ["Senior Developer", "QA Lead", "Tech Lead", "Engineering Manager", "UI Designer", "HR Manager", "Full Stack Developer", "QA Engineer"],
    
    absenceTypes: {
      "P": { label: "Present", color: "#4CAF50", icon: "check_circle" },
      "A": { label: "Absent", color: "#F44336", icon: "cancel" },
      "H": { label: "Half Day", color: "#FF9800", icon: "schedule" },
      "V": { label: "Vacation", color: "#2196F3", icon: "beach_access" },
      "S": { label: "Sick", color: "#9C27B0", icon: "local_hospital" },
      "WFH": { label: "Work From Home", color: "#795548", icon: "home" },
      "T": { label: "Travel", color: "#607D8B", icon: "flight" },
      "C": { label: "Conference", color: "#3F51B5", icon: "business" }
    },
  
    kpiData: {
      totalEmployees: 8,
      presentToday: 6,
      onLeaveToday: 2,
      attendanceRate: 85.4,
      pendingRequests: 3,
      thisMonthAbsences: 12
    },
  
    chartData: {
      absenceTrends: [
        { month: "Jan", absences: 15 },
        { month: "Feb", absences: 22 },
        { month: "Mar", absences: 18 },
        { month: "Apr", absences: 28 },
        { month: "May", absences: 35 },
        { month: "Jun", absences: 42 },
        { month: "Jul", absences: 38 }
      ],
      leaveTypes: [
        { type: "Vacation", count: 45, color: "#2196F3" },
        { type: "Sick", count: 23, color: "#9C27B0" },
        { type: "Personal", count: 18, color: "#FF9800" },
        { type: "Other", count: 12, color: "#4CAF50" }
      ]
    }
  };
  