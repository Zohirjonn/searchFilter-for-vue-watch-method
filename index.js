	watch: {
		search() {
			this.data = this.list.filter(item => {
				return item.name.toLowerCase().includes(this.search) || (item.name_ru ? item.name_ru.toLowerCase().includes(this.search) : true);
			});
		},
	},
