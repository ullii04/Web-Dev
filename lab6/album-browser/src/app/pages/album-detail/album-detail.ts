import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

import { AlbumService } from '../../services/album'
import { Album } from '../../models/album.model'

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  loading = true
  error = ''
  album: Album | null = null
  editedTitle = ''
  saving = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (!id) {
      this.loading = false
      this.error = 'Invalid album id.'
      return
    }

    this.service.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data
        this.editedTitle = data.title
        this.loading = false
      },
      error: (err) => {
        console.error(err)
        this.error = 'Failed to load album.'
        this.loading = false
      },
    })
  }

  save(): void {
    if (!this.album) return

    const title = this.editedTitle.trim()
    if (!title) {
      alert('Title cannot be empty.')
      return
    }

    this.saving = true
    const updated: Album = { ...this.album, title }

    this.service.updateAlbum(updated).subscribe({
      next: (res) => {
        // JSONPlaceholder 不会持久化，但我们本地更新
        this.album = res
        this.editedTitle = res.title
        this.saving = false
        alert('Saved (simulated).')
      },
      error: (err) => {
        console.error(err)
        this.saving = false
        alert('Save failed.')
      },
    })
  }

  back(): void {
    this.router.navigate(['/albums'])
  }
}