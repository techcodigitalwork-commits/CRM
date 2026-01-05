export const getDashboard = async (req, res) => {
  res.json({
    success: true,
    message: "Admin dashboard data"
  });
};

export const getHRData = async (req, res) => {
  res.json({
    success: true,
    message: "HR data accessed"
  });
};

export const getInventory = async (req, res) => {
  res.json({
    success: true,
    message: "Inventory data accessed"
  });
};
