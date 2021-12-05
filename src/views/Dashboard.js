import React, { useContext } from 'react';
import { StudentsContext } from 'providers/StudentsProvider';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
  const { students } = useContext(StudentsContext);
  return (
    <ViewWrapper>
      <StudentsList students={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
