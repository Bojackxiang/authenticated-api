class Response {
  static success(res, data) {
    res.status(200).json({
      success: true,
      ...data,
    });
  }

  static error(res, data) {
    res.status(400).json({
      success: false,
      ...data,
    });
  }

  static notAuthorized(res, data) {
    res.status(401).json({
      success: false,
      message: "not authorized",
      ...data,
    });
  }
}

export default Response;
