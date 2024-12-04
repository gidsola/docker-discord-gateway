// Check for event scripts
// These are manual events that can be loaded into the database.
// Plausible uses include: 
//   I'm sure this is still good for something?
// Commenting out for now.

const eventData = await Execute('SELECT * FROM events WHERE uuid=' + `'${uuid}'` + ' AND `trigger`=' + `'${trigger}'`);
if (eventData?.length) {
  if (Array.isArray(eventData)) {
    eventData.forEach(async x => {
      if ((x?.message_id == dispatch.message_id) && (x?.channel_id == dispatch.channel_id))
        try { await eval(x?.script.toString()) } catch (e) {
          console.info('manual event Eval err []:', e);
        }
    })
  }
  else {
    if ((eventData?.message_id == dispatch.message_id) && (eventData?.channel_id == dispatch.channel_id)) {
      try { await eval(eventData?.script.toString()) } catch (e) {
        console.info('manual event Eval err {}:', e);
      }
    }
  }
};