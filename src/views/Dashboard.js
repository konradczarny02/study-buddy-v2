import React from 'react';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = ({ students, deleteStudent }) => {
  return (
    <ViewWrapper>
      <StudentsList students={students} deleteStudent={deleteStudent} />
    </ViewWrapper>
  );
};

export default Dashboard;
