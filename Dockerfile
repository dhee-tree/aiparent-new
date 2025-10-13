FROM python:3.13-slim-bookworm

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set workdir inside the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    libffi-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for caching
COPY requirements.txt .

# Create a virtual environment and use it for installs
RUN python -m venv .venv

# Ensure the venv's bin is first on PATH for all following layers
ENV PATH="/app/.venv/bin:$PATH"

# Install dependencies inside the virtual environment
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy all project files
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose internal port
EXPOSE 8000

# Run gunicorn server
CMD ["gunicorn", "aiparentProject.wsgi:application", "--bind", "0.0.0.0:8000"]
