import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AutoCompleteModule } from "primeng/primeng";

import { MusicSearchComponent } from "./music-search/music-search.component";
import { MusicPlayerComponent } from "./music-player/music-player.component";
import { MusicDetailsComponent } from "./music-details/music-details.component";
import { MusicProgressComponent } from "./music-progress/music-progress.component";
import { MusicFooterComponent } from "./music-footer/music-footer.component";
import { MusicService } from "./shared/music.service";
import { ApiService } from "./shared/api.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [FormsModule, AutoCompleteModule, HttpClientModule, CommonModule],
  exports: [
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent,
  ],
  declarations: [
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent,
  ],
  providers: [ApiService, MusicService],
})
export class MusicModule {}
