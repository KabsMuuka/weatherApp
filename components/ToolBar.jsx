export default function Toolbar() {
  return (
    <>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Sagitta
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Kabs
          </Link>
        </nav>
      </Toolbar>
      ;
    </>
  );
}
