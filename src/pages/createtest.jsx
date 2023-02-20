try {
    const file = blobInfo.blob();
    const storageRef = ref(storage, file.name);
    const metadata = {
      contentType: file.type,
    };
    
    await uploadBytes(storageRef, file, metadata);
    const url = await getDownloadURL(storageRef);
    console.log(url);
    return url;
  } catch (error) {
    // Call the failure callback with the error message
    console.log(error.message);
  }
