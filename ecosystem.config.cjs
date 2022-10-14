module.exports = {
  apps : [{
    name   : "fork",
    script : "src/app.js",
    env:{
      PORT:8080
    },
    watch:true,
  },
  {
    name   : "fork",
    script : "src/app.js",
    env:{
      PORT:8081
    },
    watch:true,
  },
  {
    name : "cluster",
    script : "src/app.js",
    env:{
      PORT:8082
    },
    exec_mode:'cluster',
    node_args:"--harmony",
    instances:1
  }
]
}
