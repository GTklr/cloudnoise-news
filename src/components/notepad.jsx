const Animated = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter >
  
  <Routes>
		<Route element={<WithoutNav />}>
			<Route exact path="/" element={<Intro/>} />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/home" element={<Home/>} />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/about" element={ <About/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/blog" element={ <Blog/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/artists" element={ <Artists/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/create" element={ <Create/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/contact" element={ <Contact/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/login" element={ <Login/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/signup" element={ <SignUp/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/blogpost/:title" element={ <BlogPost/> } />
		</Route>

		<Route element={<WithNav />}>
			<Route path="/profile/:displayName" element={ <Profile/> } />
		</Route>
</Routes>
        </AnimatePresence>
    )
}