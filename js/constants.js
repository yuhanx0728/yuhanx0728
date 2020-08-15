const fadeInQueue = ["#headshot", "#name", 
                     "#intro-1", "#intro-2", "#intro-3", 
                     ".project-1", ".project-2", ".project-3",
                     ".project-4", ".project-5", 
                     "#links", "hr", "#footnote"]
const fadeInInterval = 200
const fadeInSpeed = 400
const interests = ["web development", "big data", "machine learning"]
const keywords = new Map([
	["web-development", ["javascript", "ajax", "jquery",
						 "vue.js", "vuex", "vuetify", "firebase", 
			   			 "mongodb", "express.js", "node.js",
			   			 "django", "postgresql", "materialize"]],
	["big-data", ["apache hbase", "apache phoenix"]],
	["machine-learning", ["pytorch", "scikit-learn"]]
])