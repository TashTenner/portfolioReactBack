const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    title: String,
    employmentType: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
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

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
