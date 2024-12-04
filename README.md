# Discord Gateway Container Build Source

~~This repository contains the setup for building a containerized Discord gateway.~~  

I'm a horrible liar.. MB  

Moving forward, This code will provide a gateway instance for Discord.
If you want to use in with Docker here is the config I use(partially):
```javascript
{
    Image: imageName,
    name: uuid,
    Env: Object.entries(env_obj).map(([key, value]) => `${key}=${value}`),
    WorkingDir: '/app',
    Cmd: ['/bin/sh', '-c', 'npm install && node /app/index.mjs'],
    AttachStdout: true,
    AttachStderr: true,
    AttachStdin: false,
    OpenStdin: false,
    Tty: true,
    HostConfig: {
      Binds: [`${projectDir}:/app`],
      ReadonlyRootfs: false,
      Privileged: false,
      NetworkMode: 'host',
      AutoRemove: false
    }
  }
```

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Docker (your choice of implement)

## Setup

There are things missing like the sql connector and related helpers. If you want to use this you need to make your own, no schema is provided.
