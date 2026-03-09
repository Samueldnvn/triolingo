// Linear Algebra Course Configuration
const linearAlgebraCourse = {
  courseId: "linearAlgebra",
  courseName: "Linear Algebra",
  courseDescription: "Master vectors, matrices, transformations, and tensors!",
  courseIcon: "➡️",
  units: [
    linearAlgebraUnit1,
    linearAlgebraUnit2,
    linearAlgebraUnit3,
    linearAlgebraUnit4,
    linearAlgebraUnit5,
    linearAlgebraUnit6,
    linearAlgebraUnit7
  ]
};

// Helper function to get Linear Algebra course data
function getLinearAlgebraCourse() {
  return linearAlgebraCourse;
}

// Helper function to get Linear Algebra vocab
function getLinearAlgebraVocab() {
  return linearAlgebraVocab;
}

// Helper function to get Linear Algebra icons
function getLinearAlgebraIcons() {
  return linearAlgebraIcons;
}

// Helper function to get Linear Algebra external icons
function getLinearAlgebraExternalIcons() {
  return linearAlgebraIconsExternal;
}

// Helper function to generate Linear Algebra lessons
function generateLinearAlgebraLessonForTopic(topic, difficulty) {
  return generateLinearAlgebraLesson(topic, difficulty);
}