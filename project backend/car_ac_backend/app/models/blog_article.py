from app import db


class BlogArticle(db.Model):
    __tablename__="blog_articles"
    article_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    content = db.Column(db.Text)
    author = db.Column(db.Integer, db.ForeignKey('admins.admin_id'))
    date_posted = db.Column(db.String(10))

    def to_dict(self):
        return{
            "article_id": self.article_id,
            "title": self.title,
            "content": self.content,
            "author": self.author,
            "date_posted": self.date_posted
        }