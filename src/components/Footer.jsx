export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        padding: "2.5rem 0",
        textAlign: "center",
        color: "white",
      }}
    >
      <p>&copy; Visawjeet Mallik, 2022</p>
      <a href="https://github.com/vishmallik/React-Shopping-Cart-using-Hooks/tree/master">
        <i
          className="fab fa-github"
          style={{
            display: "block",
            cursor: "pointer",
            paddingTop: "1rem",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            color: "white",
          }}
        ></i>
      </a>
    </footer>
  );
}
