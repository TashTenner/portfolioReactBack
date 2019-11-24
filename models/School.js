const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema(
  {
    school: String,
    degree: String,
    fieldOfStudy: String,
    startDate: String,
    endDate: String,
    grade: String,
    activitiesSocieties: String,
    description: String,
    photo: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const School = mongoose.model('School', schoolSchema);

module.exports = School;
