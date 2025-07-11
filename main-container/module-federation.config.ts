export const mfConfig = {
  name: "main_container",
  remotes: {
    jobPostingsApp: "jobPostingsApp@http://localhost:3001/remoteEntry.js",
    myPageApp: "myPageApp@http://localhost:3004/remoteEntry.js",
    review: "reviewapp@http://localhost:3005/remoteEntry.js",
    membershipApp:"membershipApp@http://localhost:3003/remoteEntry.js"
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "@mui/icons-material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};