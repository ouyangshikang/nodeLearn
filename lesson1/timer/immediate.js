  setImmediate(()=>{
    console.log('setImmediate')
  })

  process.nextTick(() => {
    console.log('nextTick')
  })

  setTimeout(()=>{
    console.log('setTimeout')
  },0)

  setTimeout(()=>{
    console.log('10setTimeout')
  },10)
  
  setInterval(()=>{
    console.log('setInterval')
  },10)
