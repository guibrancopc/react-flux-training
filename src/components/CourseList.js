import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        { props.courses.map(course => (
          <tr key={course.id}>
            <td><Link to={`/course/${course.slug}`}>{ course.title }</Link></td>
            <td>{ course.authorId }</td>
            <td>{ course.category }</td>
            <td><button className="btn btn-outline-danger" onClick={() => props.deleteCourse(course.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  deleteCourse: PropTypes.func,
}

CourseList.defaultProps = {
  courses: []
}

export default CourseList;