from flask import Blueprint, request, jsonify
from app import db
from app.models.blog_article import BlogArticle

blog_article_bp = Blueprint('blog_articles', __name__, url_prefix='/api/articles')

# Create a new blog article
@blog_article_bp.route('/', methods=['POST'])
def create_article():
    data = request.get_json()
    new_article = BlogArticle(
        title=data['title'],
        content=data['content'],
        author=data['author'],
        date_posted=data.get('date_posted', '')
    )
    db.session.add(new_article)
    db.session.commit()
    return jsonify(new_article.to_dict()), 201

# Get all blog articles
@blog_article_bp.route('/', methods=['GET'])
def get_articles():
    articles = BlogArticle.query.all()
    return jsonify([a.to_dict() for a in articles])

# Get a specific article
@blog_article_bp.route('/<int:article_id>', methods=['GET'])
def get_article(article_id):
    article = BlogArticle.query.get_or_404(article_id)
    return jsonify(article.to_dict())

# Update a blog article
@blog_article_bp.route('/<int:article_id>', methods=['PUT'])
def update_article(article_id):
    article = BlogArticle.query.get_or_404(article_id)
    data = request.get_json()

    article.title = data.get('title', article.title)
    article.content = data.get('content', article.content)
    article.author = data.get('author', article.author)
    article.date_posted = data.get('date_posted', article.date_posted)

    db.session.commit()
    return jsonify(article.to_dict())

# Delete a blog article
@blog_article_bp.route('/<int:article_id>', methods=['DELETE'])
def delete_article(article_id):
    article = BlogArticle.query.get_or_404(article_id)
    db.session.delete(article)
    db.session.commit()
    return jsonify({"message": "Article deleted successfully"})
