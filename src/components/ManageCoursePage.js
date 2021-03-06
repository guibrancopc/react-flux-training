import React, { useState, useEffect } from "react";
import CourseForm from './CourseForm'
// import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions';
import { toast } from 'react-toastify';
import { loadCourses } from '../actions/courseActions';

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  useEffect(() => {
    if (courseStore.getCourses().length === 0) {
      loadCourses().then(() => {
        onSlugChange();
      });
    } else {
      onSlugChange();
    }
  }, [props.match.params.slug]);

  function onSlugChange() {
    const { slug } = props.match.params;

    if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }

  function onChange(e) {
    const { name, value } = e.target;

    setCourse({
      ...course,
      [name]: value,
    })
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) {
      _errors.title = 'Title is required';
      _errors.authorId = 'Author ID is required';
      _errors.category = 'Category ID is required';
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!formIsValid()) { return; }

    courseActions.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Success! The course was saved successfully.');
    }, e => console.error('ERROR REQUEST: ', e));
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}/>
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
