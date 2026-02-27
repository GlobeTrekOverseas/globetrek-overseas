import Country from "./country.model.js";

// ----------------------------
// Create Country
// ----------------------------
export const createCountry = async (req, res) => {
  try {
    const { name, code, flagImage, seoTitle, seoDescription } = req.body;

    const existing = await Country.findOne({ name });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Country already exists",
      });
    }

    const country = await Country.create({
      name,
      code,
      flagImage,
      seoTitle,
      seoDescription,
    });

    return res.status(201).json({
      success: true,
      message: "Country created successfully",
      data: country,
    });
  } catch (error) {
    console.error("CREATE COUNTRY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create country",
    });
  }
};

// ----------------------------
// Get All Countries
// ----------------------------
export const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({ isActive: true })
      .sort({ createdAt: -1 })
      .select("-__v");

    return res.status(200).json({
      success: true,
      count: countries.length,
      data: countries,
    });
  } catch (error) {
    console.error("GET COUNTRIES ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch countries",
    });
  }
};

// ----------------------------
// Get Country By ID
// ----------------------------
export const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findOne({
      _id: id,
      isActive: true,
    });

    if (!country) {
      return res.status(404).json({
        success: false,
        message: "Country not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: country,
    });
  } catch (error) {
    console.error("GET COUNTRY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch country",
    });
  }
};

// ----------------------------
// Update Country
// ----------------------------
export const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!country) {
      return res.status(404).json({
        success: false,
        message: "Country not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Country updated successfully",
      data: country,
    });
  } catch (error) {
    console.error("UPDATE COUNTRY ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update country",
    });
  }
};

// ----------------------------
// Deactivate Country
// ----------------------------
export const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    );

    if (!country) {
      return res.status(404).json({
        success: false,
        message: "Country not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Country deactivated successfully",
    });
  } catch (error) {
    console.error("DELETE COUNTRY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete country",
    });
  }
};
