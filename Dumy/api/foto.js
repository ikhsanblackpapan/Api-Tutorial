
// This is your new function. To start, set the name and path on the left.

exports.handler = async function(context, event, callback) {
    const client = context.getTwilioClient();
    const gallery =[
      {
        src: "Masukan URL Gambar ",
        description: "Foto contoh",
        alt: "Kucing lucu",
        thumbnailWidth: "200px",
      },
      {
        src: "Masukan URL Gambar",
        description: "Foto contoh kedua",
        alt: "Kucing lain",
        thumbnailWidth: "200px",
      }
    ];
       
    return callback(null, gallery);
  };