// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/lounch_guide.html",
      filename: "lounch_guide.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/invite_your_team.html",
      filename: "invite_your_team.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/team_reports.html",
      filename: "team_reports.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/my_reports.html",
      filename: "my_reports.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/fill_out_a_report.html",
      filename: "fill_out_a_report.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/my_company.html",
      filename: "my_company.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/weekly_report_history.html",
      filename: "weekly_report_history.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/team_members.html",
      filename: "team_members.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/edit_member_information.html",
      filename: "edit_member_information.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/screens/edit_member_dialog.html",
      filename: "edit_member_dialog.html"
    }),
    
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(html)$/,
        include: path.join(__dirname, "src/views"),
        use: {
          loader: "html-loader",
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
