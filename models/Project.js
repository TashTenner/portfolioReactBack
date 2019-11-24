const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: String,
    technologies: String,
    codeFront: String,
    codeBack: String,
    demo: String,
    presentation: String,
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
