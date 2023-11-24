<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">SUHANS</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<!--a태그로 하면 페이징 리로딩 된. 하지만 vuew 라우터로 라우팅 하면 리로딩 안되고 page전환만됨-->
							<!-- active-class 현재 페이지로 갈때 class 를 추가해줄수있음.-->
							<RouterLink
								class="nav-link"
								active-class="active"
								aria-current="page"
								to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								aria-current="page"
								to="/about"
								>About</RouterLink
							>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
