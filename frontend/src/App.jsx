import { Routes, Route } from "react-router-dom";
import "./SignIn"
import SignIn from "./SignIn";
import AppAppBarCommon from "./dashboardMain/components/AppAppBarCommon";

// for admin
import DashboardCommon from "./dashboardMain/DashboardCommon";
import DashboardAdmin from "./dashboardMain/DashboardAdmin";
import ViewAndManageStudent from "./admin/ViewAndManageStudent";
import StudentList from "./admin/StudentList";
import StudentInformation from "./admin/StudentInformation";
import AddStudent from "./admin/AddStudent";
import ViewAndManageTeacher from "./admin/ViewAndManageTeacher";
import AddTeacher from "./admin/AddTeacher";
import NotificationSend from "./admin/NotificationSend";
import TeacherList from "./admin/TeacherList";

// for teacher
import CoursesListTeacher from "./teacher/CoursesLIstTeacher";
import ResourcesAndQuizTeacher from "./teacher/ResourcesAndQuizTeacher";
import AddResource from "./teacher/AddResource";
import DashboardTeacher from "./dashboardMain/DashboardTeacher";
import NotificationTeacherReceview from "./student/NotificationsTeacherReceview";


// for student
import CoursesListStudent from "./student/CoursesListStudent";
import ResourcesAndQuizStudent from "./student/ResourceAndQuizStudent";
import DashboardStudent from "./dashboardMain/DashboardStudent";

import PageNotFound from "./ PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
      {/* //all common routes */}
      <Route path="/" element={<DashboardCommon />} />
      <Route path="/dashboard" element={<DashboardCommon />} />
      <Route path="/sign-in" element={<SignIn />} />

      {/* //for admin */}
       <Route path="/dashboard-admin" element={<DashboardAdmin/>} />
       <Route path="/view-and-manage-student" element={<ViewAndManageStudent/>} />
       <Route path="/view-and-manage-teacher" element={<ViewAndManageTeacher />} />
       <Route path="/studentlist" element={<StudentList/>} />
       <Route path="/teacher-list" element={<TeacherList/>} />
       <Route path="/student-information/:id" element={<StudentInformation/>} />
       <Route path="/add-student" element={<AddStudent/>} />
       <Route path="/add-teacher" element={<AddTeacher/>} />
       <Route path="/notification-send" element={<NotificationSend/>} />
    
       {/* //for Teacher */}
       <Route path="/dashboard-teacher" element={<DashboardTeacher/>} />
       <Route path="/courses-list-teacher" element={<CoursesListTeacher/>} />
       <Route path="/resources-and-quiz" element={<ResourcesAndQuizTeacher />} />
       <Route path="/course-details/:id/resource" element={<AddResource />} />
       <Route path="/course-details/:id" element={<ResourcesAndQuizTeacher/>}/>
       <Route path="/notification-teacher-receview" element={<NotificationTeacherReceview/>}/>
       
      {/* //for Student */}
      <Route path="/dashboard-student" element={<DashboardStudent />} />
      <Route path="/courses-list-student" element={<CoursesListStudent />} />
      <Route path="/resources-and-quiz-student" element={<ResourcesAndQuizStudent />} />
      <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
};

export default App;
