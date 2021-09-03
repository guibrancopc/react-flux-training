import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import ACTION_TYPES from './actionTypes';

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        // Hey dispatcher, go tell all the stores that a course was just created
        dispatcher.dispatch({
            actionType: course.id
                ? ACTION_TYPES.UPDATE_COURSE
                : ACTION_TYPES.CREATE_COURSE,
            course: savedCourse,
        });
    });
};

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionType: ACTION_TYPES.DELETE_COURSE,
            id,
        });
    });
};

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: ACTION_TYPES.LOAD_COURSES,
            courses,
        });
    });
};
